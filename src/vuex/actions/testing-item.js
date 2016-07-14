import {testingItem} from '../mutation-types'

export default {
  getItemAt({dispatch}, testing, index) {
    dispatch(testingItem.TESTING_ITEM_GET, testing, index)
  }
}