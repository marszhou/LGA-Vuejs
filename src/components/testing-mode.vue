<template>
  <div>
    <div class="col-md-6">
      <select class="form-control" v-model='modeValue'>
        <option v-for='(value, label) of data.modeLabels' :value='value'>{{label}}</option>
      </select>
    </div>

    <div class='col-md-4' v-if='modeValue + "" === data.mode.TIME + ""'>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="0" v-model='number'>
        <div class="input-group-addon">分钟</div>
      </div>
    </div>
    <div class='col-md-4' v-if='modeValue + "" === data.mode.COUNT + ""'>
      <input type="text" class="form-control" placeholder="0" v-model='number'>
    </div>
  </div>

</template>

<script>
import {TestModeConsts} from './consts/types'

export default {

  name: 'testing-mode',

  props: {
    mode: {
      type: Number,
      default: TestModeConsts.mode.TIME
    }
  },

  data() {
    return {
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
    },
    modeValue: {
      get() {
        return this.mode
      },
      set(val) {
        this.mode = +val
      }
    }
  },

  methods: {
    getValue() {
      return this.value
    }
  }
};
</script>

<style lang="css" scoped>
</style>