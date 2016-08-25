<template>
  <div>
    <h2 v-if='testing'>测试 - {{testing.type.display}}</h2>
    <testing-info :testing='testing' v-if='testing'></testing-info>
    <template v-if='testing'>
      <button class='btn btn-info btn-block' type='button' @click='handleBegin' v-if='!testing.begun'>开始</button>
      <button class='btn btn-info btn-block' type='button' @click='handleContinue' v-if='!testing.finished && testing.begun'>继续</button>
      <div class="btn-group" role="group"  v-if='testing.finished'>
        <button class='btn btn-info ' type='button' @click='handleView'>查看结果</button>
        <button class='btn btn-success ' type='button' @click='handleCreate'>新测试</button>
      </div>
    </template>
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

  methods: {
    handleBegin() {
      // console.log(this.testing)
      this.begin(this.testing)
    },
    handleContinue() {
      this.continue(this.testing)
    },
    handleView() {
      window.router.go({
        name: 'testing-results',
        params: {
          testing_id: this.testing.id
        }
      })
    },
    handleCreate() {
      window.router.go({
        name: 'app-alphabet-solfa'
      })
    }
  },

  attached() {
    this.setCurrent(this.$route.params.testing_id)
  }

};
</script>

<style lang="css" scoped>
</style>