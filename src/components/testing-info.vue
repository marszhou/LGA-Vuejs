<template>
  <div v-if='testing.type.name === "alphabet-solfa"'>

    <div class="list-group">
      <div class="list-group-item">
        <h4 class="list-group-item-heading">类型</h4>
        <p class="list-group-item-text">{{testing.config.testingType}}</p>
      </div>
      <div href="#" class="list-group-item ">
        <h4 class="list-group-item-heading">调性</h4>
        <p class="list-group-item-text">{{testing.config.alphabet}}</p>
      </div>
      <div href="#" class="list-group-item ">
        <h4 class="list-group-item-heading">测试模式</h4>
        <p class="list-group-item-text">{{testing.getTestingModeName()}} {{testing.getTestingModeNumber()}}</p>
      </div>
    </div>

    <button class='btn btn-info btn-block' type='button' @click='handleBegin' v-if='!testing.begun'>开始</button>
    <button class='btn btn-info btn-block' type='button' @click='handleContinue' v-if='!testing.finished && testing.begun'>继续</button>
    <button class='btn btn-info btn-block' type='button' @click='handleView' v-if='testing.finished'>查看结果</button>
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
    },
    handleContinue() {
      this.continue(this.testing)
    },
    handleView() {

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