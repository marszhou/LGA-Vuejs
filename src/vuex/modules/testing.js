import * as types from '../mutation-types'
import _ from 'lodash'
import Testing from 'models/testing'

const {
  TESTING_CREATE,
  TESTING_ADD,
  TESTING_LIST,
  TESTING_GET,
  TESTING_BEGIN
} = types.testing

const state = {
  current: null,
  list: []
}

const mutations = {
  [TESTING_CREATE](state, testing) {
    console.log('module testing create', arguments)
    state.current = testing
  },
  [TESTING_LIST](state) {

  },
  [TESTING_GET](state, id) {
    let testing = _.find(state.list, {id}) || Testing.load(id)
    if (!testing) {
      throw new Error('NOT_FOUND')
    }
    state.current = testing
  },
  [TESTING_ADD](state, testing) {
    Testing.save(testing)
    state.list.push(testing)
    state.current = testing
  },
  [TESTING_BEGIN](state, testing) {
    testing.begun = true
    state.current = testing
    Testing.save(testing)
  }
}

export default {
  state, mutations
}