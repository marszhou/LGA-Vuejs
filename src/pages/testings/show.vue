<template>
  <div>
    test start {{$route.params.testing_id}}
    {{ testing | json}}
    <button v-if='!start'>开始</button>
    <router-view></router-view>
  </div>
</template>

<script>

import TestingActions from 'actions/testing'

export default {

  name: 'testing-show',

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

  created() {
    this.setCurrent(this.$route.params.testing_id)
  }

};
</script>

<style lang="css" scoped>
</style>