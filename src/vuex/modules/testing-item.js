import * as types from '../mutation-types'
// import _ from 'lodash'

import Testing from 'models/testing'
import Question from 'models/question'
import Answer from 'models/answer'

import store from '../store'

const {
  GET,
  ANSWER
} = types.testingItem

const state = {
  item: null
}

const mutations = {
  [GET](state, testing, index) {
    state.item = testing.getItemAt(index)
    Testing.save(testing)
  },

  [ANSWER](state, item, selection) {
    if (state.item === item) {
      let correct = Question.test(item.question, selection)
      state.item.answer = new Answer(selection, correct)
      Testing.save(store.state.testing.current)
    }
  }
}

export default {
  state, mutations
}