<template>
  <div>
xxx
  </div>
</template>

<script>
export default {

  name: 'testing-item-page',

  components: {

  },

  vuex: {
    actions: {

    },
    getters: {
      index: (state) => +state.route.params.item_index,
      testing_id: (state) => state.route.params.testing_id
    }
  },

  data() {
    return {

    };
  },

  computed: {

  },

  methods: {

  },

  route: {

  },

  attached() {
    console.log(this.index)
  }
};
</script>

<style lang="css" scoped>
</style>