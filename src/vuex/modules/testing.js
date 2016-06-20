import * as types from '../mutation-types'

const {
  CREATE,
  ADD,
  LIST,
  GET
} = types.testing

const state = {
  current: null
}

const mutations = {
  [CREATE](state, testing) {
    console.log('module testing create', arguments)
    state.current = testing
  },
  [LIST](state) {

  },
  [GET](state) {

  },
  [ADD](state, testing) {
    console.log('module testing add', arguments)
    state.current = testing
  },
}

export default {
  state, mutations
}