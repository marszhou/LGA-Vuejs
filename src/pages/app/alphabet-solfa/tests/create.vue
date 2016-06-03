<template>
  <div>
    test create
    <button @click='click'>click</button>
  </div>
</template>

<script>
export default {

  name: 'test-create',

  data() {
    return {

    };
  },
  methods: {
    click() {
      console.log(this.$parent, this.$root)
    }
  }
};
</script>

<style lang="css" scoped>
</style>