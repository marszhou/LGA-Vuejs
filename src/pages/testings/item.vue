<template>
  <div>
    <h3>第{{index}}题</h3>
    <div v-if='testing'>
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
      setCurrent: TestingActions.setCurrent
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