<template>
  <select v-model='value' class="form-control">
    <option v-for='(value, label) of options' :value='value'>{{label}}</option>
  </select>
</template>

<script>
export default {

  name: 'selector',

  props: {
    options: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      value: 1
    };
  },

  created() {
    console.log(this.options)
  }
};
</script>

<style lang="css" scoped>
</style>