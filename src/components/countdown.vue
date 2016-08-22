<template>
<span class="label label-default">{{current}}</span>
</template>

<script>
import date from 'utils/date'
console.log(date)

export default {
  name: 'component_name',

  components: {

  },

  props: {
    duration: Number,
    startAt: Number
  },

  vuex: {
    actions: {

    },
    getters: {

    }
  },

  data() {
    return {
      start: Date.now(),
      now: Date.now()
    };
  },

  computed: {
    current: function() {
      let diff = (this.now - this.start) / 1000
      return date.format('i:s.u2', diff)
    }
  },

  methods: {
    timing() {
      this.now = Date.now()
      if ((this.now - this.start) / 1000 >= this.duration) {
        this.$dispatch('countdown:timeout')
      } else {
        this.timer = setTimeout(this.timing, 50)
      }
    }
  },

  route: {

  },

  created() {
    this.timing()
  },

  beforeDestroy() {
    clearTimeout(this.timer)
    this.timer = null
  }
};
</script>

<style lang="css" scoped>
</style>