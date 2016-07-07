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
    },
    defaultValue: {
      type: [Number, String]
    }
  },

  data() {
    return {
      value: this.defaultValue
    };
  },

  methods: {
    getValue() {
      return this.value
    }
  },

  created() {
    // console.log(this.options)
  }
};
</script>

<style lang="css" scoped>
</style>