<template>
  <div class="progress">
    <div class="progress-bar progress-bar-success" role="progressbar" :aria-valuenow="current" :aria-valuemin="min" :aria-valuemax="max" :style="{width: percent + '%'}">
      <span class="sr-only">{{percent}}%</span>
    </div>
  </div>
</template>

<script>
export default {

  name: 'component_name',

  components: {

  },

  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    current: {
      type: Number,
      default: 0
    }
  },

  vuex: {
    actions: {

    },
    getters: {

    }
  },

  data() {
    return {

    };
  },

  computed: {
    percent() {
      console.log(this.max)
      return Math.round((this.current-this.min) / (this.max-this.min) * 10000) / 100
    }
  },

  methods: {

  },

  route: {

  }
};
</script>

<style lang="css" scoped>
</style>