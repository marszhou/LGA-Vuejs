import {testing} from '../mutation-types'

import {TestingFactory} from 'models/testing'

export default {
  createTest({dispatch}, type, config) {
    let ret = TestingFactory(type, config)
    dispatch(testing.ADD, ret)
    return ret
  }
}