<template>
  <span>
    {{used | timeDisplay}}<template v-if='!!duration'>/{{duration * 1000 | timeDisplay}}</template>
  </span>
</template>

<script>
export default {

  name: 'timer',

  props: {
    duration: {
      type: Number
    }
  },

  data() {
    return {
      used: 0,
      timer: 0,
      start: 0
    };
  },

  methods: {
    tick() {
      this.used = Date.now() - this.start
    }
  },

  created() {
    this.timer = setInterval(this.tick, 1000)
    this.start = Date.now()
  },

  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = 0
  }
};
</script>

<style lang="css" scoped>
</style>