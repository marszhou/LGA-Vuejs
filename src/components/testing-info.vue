<template>
  <div v-if='testing.type.name === "alphabet-solfa"'>

    <div class="list-group">
      <div class="list-group-item">
        <h4 class="list-group-item-heading">类型</h4>
        <p class="list-group-item-text">{{testingType}}</p>
      </div>
      <div href="#" class="list-group-item ">
        <h4 class="list-group-item-heading">调性</h4>
        <p class="list-group-item-text">{{testing.config.alphabet}}</p>
      </div>
      <div href="#" class="list-group-item ">
        <h4 class="list-group-item-heading">测试模式</h4>
        <p class="list-group-item-text">{{testing.getTestingModeName()}} {{testing.getTestingModeNumber()}}</p>
      </div>
      <div href="#" class="list-group-item " v-if='testing.begun'>
        <h4 class="list-group-item-heading">用时</h4>
        <p class="list-group-item-text">{{timeElapse}}</p>
      </div>
      <div href="#" class="list-group-item " v-if='testing.finished'>
        <h4 class="list-group-item-heading">结果</h4>
        <p class="list-group-item-text"><span style='color:darkgreen'>{{result}}</span>
          /
          <span style='font-weight: bold;'>{{testing.items.length}}</span>
          ({{resultPercent}})</p>
      </div>
    </div>
  </div>
</template>

<script>
import Testing from 'models/testing'
import {percent} from 'utils'
import date from 'utils/date'
import {AlphabetTestConsts} from 'components/consts/types'

export default {

  vuex: {
    getters: {

    }
  },

  name: 'testing-info',

  props: {
    testing: Testing
  },

  methods: {

  },

  computed: {
    result: function() {
      let correctCount = this.testing.items.filter(item => item.answer.result).length
      return correctCount
    },
    resultPercent: function() {
      return percent(this.result / this.testing.items.length)
    },
    timeElapse: function() {
      return date.format('i:s', this.testing.used)
    },
    testingType: function() {
      return AlphabetTestConsts.typeLabels[this.testing.config.testingType]
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