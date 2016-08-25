<template>
  <div>
    <div v-if='testing && item'>
      <countdown :duration='countdownDuration'
                 :base.once='testing.used'
                 @countdown:section='handleCountdownSection'
                 @countdown:timeout='handleCountdownTimeout'></countdown>
      <progress-bar :min='progressMin'
                    :max='progressMax'
                    :current='progressCurrent'
                    v-if='testing.config.testingMode.mode !== 3'>
      </progress-bar>
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
        <!-- <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> -->
        <a class="btn btn-primary btn-lg"
           href="#"
           role="button"
           @click.prevent.stop='handleClickNext'
           v-if='!finished'>Next &gt;</a>
        <a v-if='showFinishBtn'
           class="btn btn-danger btn-lg"
           href='#'
           role='button'
           @click.prevent.stop='handleClickFinish'>完成</a>
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
      setAnswer: TestingItemActions.setAnswer,
      updateTesting: TestingActions.update,
      nextItem: TestingActions.nextItem,
      finishTesting: TestingActions.finish
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
    progressMin: function() {
      return 0
    },
    progressMax: function() {
      if (this.testing.config.testingMode.mode === 1) {
        return this.testing.config.testingMode.number * 60
      }
      return Number(this.testing.config.testingMode.number)
    },
    progressCurrent: function() {
      return this.index
    },

    countdownDuration: function() {
      if (this.testing.config.testingMode.mode === 1) {
        return this.testing.config.testingMode.number * 60
      }
      return 0
    },

    finished: function() {
      if (this.testing.config.testingMode.mode === 1) {
        return this.testing.used >= this.testing.config.testingMode.number * 60
      } else if (this.testing.config.testingMode.mode === 2) {
        return this.testing.items.length >= this.testing.config.testingMode.number
      }
      return false
    },

    showFinishBtn: function() {
      if (this.testing.config.testingMode.mode === 3 || this.finished) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    handleClickAnswer(index, option) {
      this.setAnswer(this.item, [option])
    },
    handleClickNext() {
      // debugger
      this.nextItem(this.testing, this.item, Number(this.$route.params.item_index))
    },
    handleClickFinish() {
      this.finishTesting(this.testing)
    },
    handleCountdownTimeout() {
      this.finishTesting(this.testing)
    },
    handleCountdownSection(current) {
      this.updateTesting(this.testing, {used: current})
    }
  },

  route: {
    data(t) {
      this.setCurrent(this.$route.params.testing_id)
      this.getItemAt(this.testing, this.index)
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
    /*background-color: greenyellow!important;*/
  }
</style>