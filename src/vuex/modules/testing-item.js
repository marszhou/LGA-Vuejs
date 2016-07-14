import * as types from '../mutation-types'
import _ from 'lodash'

const {
  TESTING_ITEM_GET
} = types.testingItem

const state = {
  item: null
}

const mutations = {
  [TESTING_ITEM_GET](state, testing, index) {
    state.item = testing.getItemAt(index)
  }
}

export default {
  state, mutations
}