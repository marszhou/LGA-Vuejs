<template>
  <div>
    <form class='form-horizontal'>
      <form-group label='选择类型'>
        <selector v-ref:testing-type :options='alphabetTestTypes' :default-value='3'></selector>
      </form-group>

      <form-group label='选择调性'>
        <alphabet-selector v-ref:alphabet type='checkbox' :value='["a", "C"]'></alphabet-selector>
      </form-group>

      <form-group label='选择测试模式' :multi='true'>
        <testing-mode v-ref:testing-mode :mode.sync='testMode'></testing-mode>
      </form-group>

      <div class="form-group">
        <div class='col-md-offset-2 col-md-2 col-xs-offset-0 col-xs-12'>
          <button type="button"
                  class="btn btn-info btn-block"
                  @click='handleCreate'>
            创建
          </button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
// import TitleBar from 'components/title-bar'
import FormGroup from 'components/form-group'
import AlphabetSelector from 'components/alphabet-selector'
import TestingMode from 'components/testing-mode'
import Selector from 'components/selector'

import {AlphabetTestConsts, TestModeConsts} from 'components/consts/types'


export default {

  name: 'test-create',
  components: {
    // TitleBar,
    FormGroup,
    AlphabetSelector,
    TestingMode,
    Selector
  },
  data() {
    return {
      alphabetTestTypes: AlphabetTestConsts.typeLabels,
      testMode: TestModeConsts.mode.COUNT,
      config: {}
    };
  },
  methods: {
    handleCreate() {
      let testingType = this.$refs.testingType.getValue()
      let alphabet = this.$refs.alphabet.getValue()
      let testingMode = this.$refs.testingMode.getValue()
      let config = {testingType, alphabet, testingMode}
      console.log(config)
    }
  }
};
</script>

<style lang="css" scoped>
</style>