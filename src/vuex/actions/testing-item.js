import {testingItem} from '../mutation-types'

export default {
  getItemAt({dispatch}, testing, index) {
    dispatch(testingItem.GET, testing, index)
  }
}