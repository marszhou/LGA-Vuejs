<template>
  <div>
    <div v-if='testing && item'>
      <countdown v-if='testing.config.testingMode.mode === 1'
                 :duration='testing.config.testingMode.number * 60'></countdown>
      <progress-bar></progress-bar>
      <div class="jumbotron">
        <p>{{index}}.{{item.question.title}}</p>
        <h1 style='text-align: center'>{{item.question.name}}</h1>
      </div>

      <div class="list-group">
        <a @click.prevent.stop='handleClickAnswer($index, o)'
           href="#"
           class="list-group-item"
           :class='{current: item.answer.selection.indexOf(o) > -1, correct: item.answer.selection.indexOf(o) > -1 && item.question.corrects.indexOf(o) > -1}'
           v-for='o of item.question.options'>
          <h4 class="list-group-item-heading" style='text-align: center'>{{o}}</h4>
        </a>
      </div>

      <p>
        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        <a class="btn btn-primary btn-lg" href="#" role="button" @click='handleClickNext'>Next &gt;</a>
      </p>
    </div>
  </div>
</template>

<script>
// import TestingModel from 'models/testing'
import TestingItemActions from 'actions/testing-item'
import TestingActions from 'actions/testing'

import Countdown from 'components/countdown'
import ProgressBar from 'components/progress-bar'

// import {generateRandomAlphaSolfaPair} from 'utils/music'
// console.log('D大调', generateRandomAlphaSolfaPair('D'))

export default {

  name: 'testing-item-page',

  components: {
    Countdown,
    ProgressBar
  },

  vuex: {
    actions: {
      getItemAt: TestingItemActions.getItemAt,
      setCurrent: TestingActions.setCurrent,
      setAnswer: TestingItemActions.setAnswer
    },
    getters: {
      index: (state) => +state.route.params.item_index,
      testing_id: (state) => state.route.params.testing_id,
      testing: (state) => state.testing.current,
      item: (state) => state.testingItem.item
    }
  },

  data() {
    return {

    };
  },

  computed: {

  },

  methods: {
    handleClickAnswer(index, option) {
      this.setAnswer(this.item, [option])
    },
    handleClickNext() {
      this.$route.router.go({name: 'testing-item', params: {item_index: Number(this.$route.params.item_index) + 1}})
    }
  },

  route: {
    data(t) {
      this.setCurrent(this.$route.params.testing_id)
      this.getItemAt(this.testing, this.index)
      console.log(this.testing)
      t.next()
    }
  },

  attached() {
    // console.log(this.testing.getItemAt(this.index))

  }
};
</script>

<style lang="css" scoped>
  .current {
    border-width: 4px;
  }
  .correct {
    background-color: greenyellow!important;
  }
</style>