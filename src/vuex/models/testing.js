import _ from 'lodash'
import * as utils from 'utils'
// import BaseModel from './base-model'
import {saveObj, loadObj} from 'utils/storage'
import * as TypeConst from 'components/consts/types'
import TestingItemModel from './testing-item'
import {default as QuestionModel, Mode as QuestionMode} from './question'
import AnswerModel from './answer'

import {getScaleOfAlpha, getScaleOfSolfa, generateRandomAlphaSolfaPair} from 'utils/music'

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
    this.createdOn = Date.now() // 创建时间
    this.startOn = 0            // 开始时间
    this.endOn = 0              // 结束时间
    this.finished = false       // 完成？
    this.begun = false          // 开始？
    this.type = type            // 类型
    this.config = config        // 测试的配置
    this.items = []             // 试题列表
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
    if (index - 1 === length) {
      // gen new item
      let item = this.generateNewItem()
      this.items.push(item)
      return item
    } else if (index - 1 > length) {
      // invalid
      return null
    } else {
      return this.items[index - 1]
    }
  }

  generateNewItem() {
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
  // 随机获得当前item的调子
  const a = config.alphabet[Math.floor(Math.random() * config.alphabet.length)]
  // 获得当前item的模式：A2T / T2A
  const t = (config.testingType === TypeConst.AlphabetTestConsts.types.MIXED)
    ? (Math.random() > 0.5 ? TypeConst.AlphabetTestConsts.types.A2T : TypeConst.AlphabetTestConsts.types.T2A)
    : config.testingType

  function getTitle(type, alpha) {
    const alphaName = (alpha.charCodeAt(0)>=97) ? `${alpha}小调` : `${alpha}大调`
    if (type === TypeConst.AlphabetTestConsts.types.A2T) {
      return `此音名在${alphaName}里的唱名是下面哪一个？`
    } else {
      return `此唱名在${alphaName}里的音名是下面哪一个？`
    }
  }

  function getOptions(type, as, ss, correct) {
    let as2 = as.slice()
    let ss2 = ss.slice()
    let s = type === TypeConst.AlphabetTestConsts.types.A2T ? ss2 : as2
    let ret = _.sampleSize(s, 4)

    if (_.indexOf(ret, correct) === -1) {
      ret.unshift(correct)
      ret = ret.slice(0, 4)
    }

    return ret
  }

  let scaleOfA = getScaleOfAlpha(a)
  let scaleOfS = getScaleOfSolfa()
  let pair = generateRandomAlphaSolfaPair(a)
  let correct = t === TypeConst.AlphabetTestConsts.types.A2T ? pair.s : pair.a
  let options = getOptions(t, scaleOfA, scaleOfS, correct)

  let q = {
    title: getTitle(t, a),
    mode: QuestionMode.Single,
    name: t === TypeConst.AlphabetTestConsts.types.A2T ? pair.a : pair.s,
    corrects: [correct],
    options
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