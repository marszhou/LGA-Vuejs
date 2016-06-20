import * as utils from 'utils'

export const TestingTypes = {
  'alphabetSolfa': 'alphabet-solfa'
}

export default class Testing {
  constructor(type, config) {
    this.id = 1
    this.type = type
    this.config = config
    this.items = []
  }
}