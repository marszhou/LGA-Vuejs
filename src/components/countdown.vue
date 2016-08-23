<template>
<span class="label label-default">{{current}} <span style='' v-if='duration'>/ {{durationDisplay}}</span></span>
</template>

<script>
import date from 'utils/date'
const sectionLength = 15

export default {
  name: 'component_name',

  components: {

  },

  props: {
    duration: Number,
    base: Number
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
    elapse: function() {
      return (this.now - this.start) / 1000 + this.base
    },
    current: function() {
      let diff = this.elapse
      return date.format('i:s', diff)
    },
    durationDisplay() {
      if (this.duration > 0) {
        return date.format('i:s', this.duration)
      }
      return ''
    }
  },

  methods: {
    timing() {
      this.now = Date.now()
      let diff = this.elapse
      let s = Math.floor(diff/sectionLength)

      if (diff >= this.duration) {
        this.$dispatch('countdown:timeout')
      } else {
        this.timer = setTimeout(this.timing, 50)
      }
      if (this.s !== s) {
        this.s = s
        this.$dispatch('countdown:section', diff)
      }
      this.$dispatch('countdown:tick')
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