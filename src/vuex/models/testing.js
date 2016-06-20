import * as utils from 'utils'

export const TestingTypes = {
  'alphabetSolfa': 'alphabet-solfa'
}

export default class Testing {
  constructor(type, config) {
    this.id = null
    this.type = type
    this.config = config
    this.items = []
  }
}

export function TestingFactory(type, config) {
  let testing = new Testing(type, config)
  testing.id = utils.uniqueKey()

  return testing;
}

