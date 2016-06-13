<template>
  <select v-model='value' class="form-control">
    <option v-for='option of options' :value='option.value'>{{option.label}}</option>
  </select>
</template>

<script>
export default {

  name: 'selector',

  props: {
    options: {
      type: Array,
      default: []
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