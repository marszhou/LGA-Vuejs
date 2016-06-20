<template>
  <div>
    test start {{$route.params.test_id}}
    {{ testing | json}}
    <router-view></router-view>
  </div>
</template>

<script>

import TestingActions from 'actions/testing'

export default {

  name: 'test-start',

  vuex: {
    actions: TestingActions,
    getters: {
      testing: state => state.testing.current
    }
  },

  data() {
    return {

    };
  },

  created() {
    this.setCurrent(this.$route.params.test_id)
  }

};
</script>

<style lang="css" scoped>
</style>