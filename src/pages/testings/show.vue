<template>
  <div>
    <h2 v-if='testing'>测试 - {{testing.type.display}}</h2>
    <testing-info :testing='testing' v-if='testing'></testing-begin>

  </div>
</template>

<script>

import TestingActions from 'actions/testing'
import TestingInfo from 'components/testing-info'

export default {

  name: 'testing-show',

  components: {
    TestingInfo
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