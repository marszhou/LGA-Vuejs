import * as types from '../mutation-types'

const {
  CREATE,
  LIST,
  GET
} = types.testing

const state = {
  config: {}
}

const mutation = {
  [CREATE](state, config) {
    console.log('module testing create')
    state.config = config
  },
  [LIST](state) {

  },
  [GET](state) {

  }
}

export default {
  state, mutation
}