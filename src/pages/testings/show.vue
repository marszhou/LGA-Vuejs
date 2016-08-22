<template>
  <div>
    <h2 v-if='testing'>测试 - {{testing.type.display}}</h2>
    <testing-begin :testing='testing' v-if='testing'></testing-begin>

  </div>
</template>

<script>

import TestingActions from 'actions/testing'
import TestingBegin from 'components/testing-begin'

export default {

  name: 'testing-show',

  components: {
    TestingBegin
  },

  vuex: {
    actions: TestingActions,
    getters: {
      testing: state => state.testing.current
    }
  },

  data() {
    return {
      start: false
    };
  },

  attached() {
    this.setCurrent(this.$route.params.testing_id)
  }

};
</script>

<style lang="css" scoped>
</style>