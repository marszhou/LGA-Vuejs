import * as types from '../mutation-types'
// import _ from 'lodash'

import Testing from 'models/testing'

const {
  GET
} = types.testingItem

const state = {
  item: null
}

const mutations = {
  [GET](state, testing, index) {
    state.item = testing.getItemAt(index)
    Testing.save(testing)
  }
}

export default {
  state, mutations
}