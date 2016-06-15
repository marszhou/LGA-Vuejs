<template>
<div class='container-fluid'>
  <div class='row' v-if='type === "checkbox"'>
    <label class='checkbox-inline'><input type='checkbox' @click='handleCheckAll' :checked='allChecked'/>全选</label>
    <span>{{selected | json}}</span>
    <br/>
  </div>
  <div class='row' v-if='includeMajor'>
    <label class='checkbox-inline' v-for='tone of majors'><input :type='type' :value='tone' v-model='checked' @change='handleCheck'/> {{tone}}大调</label>
    <br/>
  </div>
  <div class='row' v-if='includeMinor'>
    <label class='checkbox-inline' v-for='tone of minors'><input :type='type' :value='tone' v-model='checked' @change='handleCheck'/> {{tone}}小调</label>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
import * as Music from 'utils/music'

import {AlphabetSelectorEvents} from './consts/events'

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
    },
    value: {
      type: [String, Array],
      default: null
    }
  },

  computed: {
    allChecked() {
      return _.difference(this.all, this.checked).length === 0
    },

    all() {
      let values1 = []
      let values2 = []

      if (this.includeMajor) {
        values1 = this.majors
      }

      if (this.includeMinor) {
        values2 = this.minors
      }
      return values1.concat(values2)
    }
  },

  data() {
    return {
      majors: Music.getMajors(),
      minors: Music.getMinors(),
      checked: this.value || []
    };
  },
  methods: {
    getValue() {
      return this.checked
    },
    handleCheckAll(e) {
      let checked = e.target.checked

      let values = []
      if (checked) {
        values = this.all.slice()
      }

      this.checked = values
      this.triggerCheckedEvent(this.checked.slice(), e)
    },

    handleCheck(e) {
      // debugger
      this.triggerCheckedEvent(this.checked.slice(), e)
    },

    triggerCheckedEvent() {
      this.$$dispatch(AlphabetSelectorEvents.Checked, arguments)
    }
  }
};
</script>

<style lang="css" scoped>
</style>