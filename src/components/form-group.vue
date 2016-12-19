<template>
<div class="form-group">
  <label :class='titleClass' class="control-label" for="formGroupInputLarge">{{label}}</label>
  <template v-if='multi'>
    <slot></slot>
  </template>
  <div v-else :class="valueClass">
    <slot></slot>
  </div>

</div>
</template>

<script>
export default {

  name: 'form-group',
  props: {
    layoutTarget: {
      type: String,
      default: 'md' // see bootstrap column layout define, also can use : xs sm md lg
    },
    titleColumnWidth: {
      type: Number,
      default: 2
    },
    valueColumnWidth: {
      type: Number,
      default: 10
    },
    label: String,
    multi: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    };
  },
  computed: {
    titleClass() {
      return `col-${this.layoutTarget}-${this.titleColumnWidth}`
    },
    valueClass() {
      return `col-${this.layoutTarget}-${this.valueColumnWidth}`
    }
  }
};
</script>

<style lang="css" scoped>
</style>
