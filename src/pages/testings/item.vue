<template>
  <div>
    <div v-if='testing && item'>
      <div class="jumbotron">
        <p>{{index}}.{{item.question.title}}</p>
        <h1 style='text-align: center'>{{item.question.name}}</h1>
      </div>

      <div class="list-group">
        <a @click.prevent.stop='handleClickAnswer($index, o)' href="#" class="list-group-item" v-for='o of item.question.options'>
          <h4 class="list-group-item-heading" style='text-align: center'>{{o}}</h4>
        </a>
      </div>

      <p><a class="btn btn-primary btn-lg" href="#" role="button">Next &gt;</a></p>
      {{item | json}}
    </div>
  </div>
</template>

<script>
// import TestingModel from 'models/testing'
import TestingItemActions from 'actions/testing-item'
import TestingActions from 'actions/testing'

// import {generateRandomAlphaSolfaPair} from 'utils/music'
// console.log('D大调', generateRandomAlphaSolfaPair('D'))

export default {

  name: 'testing-item-page',

  components: {

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
    }
  },

  route: {

  },

  attached() {
    // console.log(this.testing.getItemAt(this.index))
    this.setCurrent(this.$route.params.testing_id)
    this.getItemAt(this.testing, this.index)
  }
};
</script>

<style lang="css" scoped>
</style>