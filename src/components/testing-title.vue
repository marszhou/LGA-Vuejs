<template>
  <div class="page-header container-fluid">
    <div class="row test-title">
      <div class="col-md-3 title">{{title}}</div>
      <div class="col-md-5 time">时间：<timer :duration='duration'></timer></div>
      <div class="col-md-2 progressing">
      完成：{{ finished }} <template v-if='total > 0'> / {{ total }} ({{ finished / total | percent}})</template>

      </div>
      <div class="col-md-1 col-xs-6 operation text-right">
        <button type='button' class='btn btn-info btn-block' @click='handlePause'>暂停</button>
      </div>
      <div class="col-md-1 col-xs-6 operation text-right">
        <button type='button' class='btn btn-danger btn-block' @click='handleQuit'>退出</button>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from './timer'
import {TestingEvents} from './consts/events'

export default {

  name: 'testing-title',

  props: {
    mode: {
      type: Number
    },
    duration: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    title: String
  },

  components: {
    Timer
  },

  data() {
    return {
      finished: 11
    };
  },

  methods: {
    finish() {
      ++this.finish
    },

    handlePause() {
      this.$dispatch(TestingEvents.Pause)
    },

    handleQuit() {
      this.$dispatch(TestingEvents.Quit)
    }
  }
};
</script>

<style lang="css" scoped>
</style>