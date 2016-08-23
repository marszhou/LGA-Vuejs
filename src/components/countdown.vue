<template>
<span class="label label-default">{{current}} <span style='' v-if='duration'>/ {{durationDisplay}}</span></span>
</template>

<script>
import date from 'utils/date'

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
      if (this.duration && (this.now - this.start) / 1000 >= this.duration) {
        this.$dispatch('countdown:timeout')
      } else {
        this.timer = setTimeout(this.timing, 50)
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