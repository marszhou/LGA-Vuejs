import * as types from '../mutation-types'
import _ from 'lodash'
import Testing from 'models/testing'

const {
  CREATE,
  ADD,
  LIST,
  GET,
  BEGIN,
  FINISH,
  CONTINUE,
  UPDATE,
  NEXT
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
    if (state.current && state.current.id === id) {
      return
    }
    let testing = _.find(state.list, {id}) || Testing.load(id)
    if (state.list.indexOf(testing) === -1) {
      state.list.push(testing)
    }
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
  [FINISH](state, testing) {
    testing.finished = true
    testing.finishedOn = Date.now()
    _.last(testing.items).confirmed = true
    Testing.save(testing)

    window.router.go({
      name: 'testing',
      params: {
        testing_id: testing.id
      }
    })
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
  },
  [UPDATE](state, testing, props) {
    state.current = _.assign(testing, props)
    Testing.save(testing)
  },

  [NEXT](state, testing, currentItem, currentItemIndex) {
    currentItem.confirmed = true
    window.router.go({
      name: 'testing-item',
      params: {item_index: currentItemIndex + 1}
    })
    Testing.save(testing)
  }
}

export default {
  state, mutations
}