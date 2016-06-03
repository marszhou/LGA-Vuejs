<template>
  <div class="container-fluid">
    <div class="row test-title">
      <div class="col-md-11 title">{{title}}</div>
      <div class="col-md-1 operation text-right"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'list-title-bar',
  props: {
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>