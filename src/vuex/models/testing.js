import * as utils from 'utils'
import BaseModel from './base-model'
import {saveObj, loadObj} from 'utils/storage'
import * as TypeConst from 'components/consts/types'
import TestingItemModel from './testing-item'
import QuestionModel from './question'
import AnswerModel from './answer'

const prefix = 'testing'

export const TestingTypes = {
  'alphabetSolfa': {
    name: 'alphabet-solfa',
    display: '音名唱名转换'
  }
}

export default class Testing {
  constructor(type, config) {
    this.id = null
    this.createdOn = Date.now()
    this.finished = false
    this.begun = false
    this.type = type
    this.config = config
    this.items = []
  }

  valid() {
    return this.config.alphabet.length > 0
  }

  getTestingModeName() {
    return TypeConst.TestModeConsts.modeLabels[this.config.testingMode.mode]
  }

  getTestingModeNumber() {
    if (TypeConst.TestModeConsts.mode.TIME === this.config.testingMode.mode) {
      return this.config.testingMode.number + '分钟'
    } else if (TypeConst.TestModeConsts.mode.COUNT === this.config.testingMode.mode) {
      return this.config.testingMode.number + '道'
    }
    return null
  }

  getItemAt(index) {
    let length = this.items.length
    if (index - 1 === length){
      // gen new item
      let item = this.genNewItem()
      this.items.push(item)
      return item
    } else if (index -1 > length) {
      // invalid
      return null
    } else {
      return this.items[index - 1]
    }
  }

  genNewItem() {
    if (this.type.name === TestingTypes.alphabetSolfa.name) {
      return newAlphaSolfaItem(this.config)
    }
  }

  static load(id) {
    try {
      let {type, config, items, createdOn, begun, finished} = loadObj(id, prefix)
      let testing = new Testing(type, config)
      testing.id = id
      testing.createdOn = createdOn
      testing.begun = begun
      testing.finished = finished
      testing.items = items
      return testing
    } catch (e) {
      return null
    }
  }

  static save(testing) {
    // const obj = _.pick(testing, ['type', 'config', 'items'])
    saveObj(testing.id, testing, prefix)
  }

}

export function newAlphaSolfaItem(config) {
  let q = {

  }
  let question = new QuestionModel(q)
  let answer = new AnswerModel()
  return new TestingItemModel({question, answer})
}

export function TestingFactory(type, config) {
  let testing = new Testing(type, config)
  testing.id = utils.uniqueKey()

  return testing;
}