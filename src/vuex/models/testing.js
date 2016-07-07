import * as utils from 'utils'
import BaseModel from './base-model'
import {saveObj, loadObj} from 'utils/storage'
import _ from 'lodash'

const prefix = 'testing'

export const TestingTypes = {
  'alphabetSolfa': 'alphabet-solfa'
}

export default class Testing extends BaseModel {
  constructor(type, config) {
    super(type, config)

    this.id = null
    this.type = type
    this.config = config
    this.items = []
  }

  valid() {
    return this.config.alphabet.length > 0
  }

  static load(id) {
    try {
      let {type, config, items} = loadObj(id, prefix)
      let testing = new Testing(type, config)
      testing.id = id
      testing.items = items
      return testing
    } catch (e) {
      return null
    }
  }

  static save(testing) {
    const obj = _.pick(testing, ['type', 'config', 'items'])
    saveObj(testing.id, obj, prefix)
  }
}

export function TestingFactory(type, config) {
  let testing = new Testing(type, config)
  testing.id = utils.uniqueKey()

  return testing;
}