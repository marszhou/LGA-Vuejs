<template>
<div class='container-fluid'>
  <div class='row' v-if='type === "checkbox"'>
    <label class='checkbox-inline'><input type='checkbox'/>全选</label>
    <br/>
  </div>
  <div class='row' v-if='includeMajor'>
    <label class='checkbox-inline' v-for='tone of majors'><input :type='type'/> {{tone}}大调</label>
    <br/>
  </div>
  <div class='row' v-if='includeMinor'>
    <label class='checkbox-inline' v-for='tone of minors'><input :type='type'/> {{tone}}小调</label>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
import * as Music from 'utils/music'

export default {

  name: 'alphabet-selector',

  props: {
    // 包含大调
    includeMajor: {
      type: Boolean,
      default: true
    },
    // 包含小调
    includeMinor: {
      type: Boolean,
      default: true
    },
    // 类型: checkbox / radio
    type: {
      type: String,
      validator: (val) => _.indexOf(['checkbox', 'radio'], val.toLowerCase()) > -1
    }
  },
  data() {
    return {
      majors: Music.getMajors(),
      minors: Music.getMinors()
    };
  }
};
</script>

<style lang="css" scoped>
</style>