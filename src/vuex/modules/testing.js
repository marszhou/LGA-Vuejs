import * as types from '../mutation-types'
import _ from 'lodash'

const {
  CREATE,
  ADD,
  LIST,
  GET,
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
    let testing = _.find(state.list, {id})
    console.log(testing)
    state.current = testing
  },
  [ADD](state, testing) {
    console.log('module testing add', arguments)
    state.list.push(testing)
    state.current = testing
  },
}

export default {
  state, mutations
}