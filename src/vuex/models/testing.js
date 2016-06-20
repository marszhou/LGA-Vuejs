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
  valid() {
    return this.config.alphabet.length > 0
  }
}

export function TestingFactory(type, config) {
  let testing = new Testing(type, config)
  testing.id = utils.uniqueKey()

  return testing;
}

