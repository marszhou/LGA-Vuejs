<template>
  <div v-if='testing.type.name === "alphabet-solfa"'>

    <div class='row'>
      <div class='col-xs-4'><h4>类型</h4></div>
      <div class='col-xs-8'><h4>{{testing.config.testingType}}</h4></div>
    </div>

    <div class='row'>
      <div class='col-xs-4'><h4>调性</h4></div>
      <div class='col-xs-8'><h4>{{testing.config.alphabet}}</h4></div>
    </div>

    <div class='row'>
      <div class='col-xs-4'><h4>测试模式</h4></div>
      <div class='col-xs-8'><h4>{{testing.getTestingModeName()}} {{testing.getTestingModeNumber()}}</h4></div>
    </div>

    <button class='btn btn-info btn-block' type='button' @click='handleBegin'>开始</button>
  </div>
</template>

<script>
import Testing from 'models/testing'
import actions from 'actions/testing'

export default {

  vuex: {
    actions: actions,
    getters: {

    }
  },

  name: 'testing-begin',

  props: {
    testing: Testing
  },

  methods: {
    handleBegin() {
      // console.log(this.testing)
      this.begin(this.testing)
    }
  },

  data() {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>