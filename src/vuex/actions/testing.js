import {testing} from '../mutation-types'
import {TestingFactory} from 'models/testing'

export default {
  createTest({dispatch}, type, config) {
    let t = TestingFactory(type, config)

    if (!t.valid()) {
      return null
    } else {
      dispatch(testing.TESTING_ADD, t)
    }

    return t
  },

  setCurrent({dispatch}, id) {
    dispatch(testing.TESTING_GET, id)
  },

  begin({dispatch}, t) {
    dispatch(testing.TESTING_BEGIN, t)

    window.router.go({
      name: 'testing-item',
      params: {
        testing_id: t.id,
        item_index: 1
      }
    })
  }
}