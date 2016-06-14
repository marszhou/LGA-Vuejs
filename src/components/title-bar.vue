<template>
  <div class="container-fluid">
    <div class="row test-title">
      <div class="col-md-{{12 - controlColumns}} title">{{title}}</div>
      <div v-if='!noControls' class="col-md-{{controlColumns}} operation text-right"><slot></slot></div>
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
    },
    controlColumns: { // 控制按钮栏所占的栅格宽度
      type: Number,
      default: 1
    },
    noControls: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {

    };
  },

  created() {

  }
};
</script>

<style lang="css" scoped>
</style>