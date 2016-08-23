import * as types from '../mutation-types'
import _ from 'lodash'
import Testing from 'models/testing'

const {
  CREATE,
  ADD,
  LIST,
  GET,
  BEGIN,
  FINISHED,
  CONTINUE
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
    testing.startOn = Date.now()
    state.current = testing
    Testing.save(testing)

    window.router.go({
      name: 'testing-item',
      params: {
        testing_id: testing.id,
        item_index: 1
      }
    })
  },
  [FINISHED](state, testing) {
    testing.finished = true
    testing.finishedOn = Date.now()
    Testing.save(testing)
  },
  [CONTINUE](state, testing) {
    state.current = testing

    window.router.go({
      name: 'testing-item',
      params: {
        testing_id: testing.id,
        item_index: testing.getLastItemIndex()
      }
    })
  }
}

export default {
  state, mutations
}