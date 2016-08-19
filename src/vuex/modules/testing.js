import * as types from '../mutation-types'
import _ from 'lodash'
import Testing from 'models/testing'

const {
  CREATE,
  ADD,
  LIST,
  GET,
  BEGIN
} = types.testing

const state = {
  current: null,
  list: []
}

const mutations = {
  [CREATE](state, testing) {
    console.log('module testing create', arguments)
    state.current = testing
  },
  [LIST](state) {

  },
  [GET](state, id) {
    let testing = _.find(state.list, {id}) || Testing.load(id)
    if (!testing) {
      throw new Error('NOT_FOUND')
    }
    state.current = testing
  },
  [ADD](state, testing) {
    state.list.push(testing)
    state.current = testing
    Testing.save(testing)
  },
  [BEGIN](state, testing) {
    testing.begun = true
    state.current = testing
    Testing.save(testing)
  }
}

export default {
  state, mutations
}