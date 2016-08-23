import {testing} from '../mutation-types'
import {TestingFactory} from 'models/testing'

export default {
  createTest({dispatch}, type, config) {
    let t = TestingFactory(type, config)

    if (!t.valid()) {
      return null
    } else {
      dispatch(testing.ADD, t)
    }

    return t
  },

  setCurrent({dispatch}, id) {
    dispatch(testing.GET, id)
  },

  begin({dispatch}, t) {
    dispatch(testing.BEGIN, t)
  },

  continue({dispatch}, t) {
    dispatch(testing.CONTINUE, t)
  },

  update({dispatch}, t, props) {
    dispatch(testing.UPDATE, t, props)
  },

  nextItem({dispatch}, t, currentItem, currentItemIndex) {
    dispatch(testing.NEXT, t, currentItem, currentItemIndex)
  }
}