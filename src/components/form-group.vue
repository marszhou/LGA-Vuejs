<template>
<div class="form-group">
  <label class="col-md-2 control-label" for="formGroupInputLarge">{{label}}</label>
  <div class="col-md-10">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {

  name: 'form-group',
  props: {
    label: String
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>