import * as types from '../mutation-types'
import _ from 'lodash'
import Testing from 'models/testing'

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
    let testing = _.find(state.list, {id}) || Testing.load(id)
    if (!testing) {
      // console.log(window.router.go)
      // window.router.go('/404')
      throw new Error('NOT_FOUND')
    }
    state.current = testing
  },
  [ADD](state, testing) {
    console.log('module testing add', arguments)

    Testing.save(testing)

    state.list.push(testing)
    state.current = testing
  },
}

export default {
  state, mutations
}