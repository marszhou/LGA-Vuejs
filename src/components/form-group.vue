<template>
<div class="form-group">
  <label class="col-md-2 control-label" for="formGroupInputLarge">{{label}}</label>
  <template v-if='multi'>
    <slot></slot>
  </template>
  <div v-else class="col-md-10">
    <slot></slot>
  </div>

</div>
</template>

<script>
export default {

  name: 'form-group',
  props: {
    label: String,
    multi: {
      type: Boolean,
      default: false
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