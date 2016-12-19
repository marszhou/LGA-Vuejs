<template>
<div>
  {{{mdContent}}}
</div>
</template>

<script>
import {markdown} from 'markdown'

export default {

  name: 'standard-page',

  components: {

  },

  vuex: {
    actions: {

    },
    getters: {

    }
  },

  data() {
    return {
      mdContent: require('./standard.md')
    };
  },

  computed: {
  },

  methods: {

  },

  route: {

  }
};
</script>

<style lang="css" scoped>
</style>
