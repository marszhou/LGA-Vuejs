<template>
  <div v-if='testing.type.name === "alphabet-solfa"'>

    <div class='row'>
      <div class='col-md-2'>类型</div>
      <div class='col-md-10'>{{testing.config.testingType}}</div>
    </div>

    <div class='row'>
      <div class='col-md-2'>调性</div>
      <div class='col-md-10'>{{testing.config.alphabet}}</div>
    </div>

    <div class='row'>
      <div class='col-md-2'>测试模式</div>
      <div class='col-md-10'>{{testing.getTestingModeName()}} {{testing.getTestingModeNumber()}}</div>
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