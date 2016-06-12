<template>
  <div class="col-md-6">
    <select class="form-control" v-model='modeValue'>
      <option v-for='mode of data.modeLabels' :value='mode.value'>{{mode.label}}</option>
    </select>
  </div>

  <div class='col-md-4' v-if='modeValue === data.mode.TIME'>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="0" v-model='number'>
      <div class="input-group-addon">分钟</div>
    </div>
  </div>
  <div class='col-md-4' v-if='modeValue === data.mode.COUNT'>
    <input type="text" class="form-control" placeholder="0" v-model='number'>
  </div>

</template>

<script>
import {TestModeConsts} from './consts/types'

export default {

  name: 'test-mode',

  props: {
    mode: Number
  },

  data() {
    return {
      modeValue: this.mode || TestModeConsts.mode.TIME,
      data: TestModeConsts,
      number: 30
    };
  },

  computed: {
    value() {
      return {
        mode: this.modeValue,
        number: this.number
      }
    }
  }
};
</script>

<style lang="css" scoped>
</style>