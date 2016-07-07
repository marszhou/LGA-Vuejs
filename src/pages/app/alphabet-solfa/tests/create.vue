<template>
  <div>
    <form class='form-horizontal'>
      <div class="alert alert-danger" role="alert" v-if='error'>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click='handleCloseError'><span aria-hidden="true">&times;</span></button>
        请完整填写数据
      </div>

      <div class="alert alert-success" role="alert" v-if='success'>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        测试创建成功，即将进入测试...
      </div>

      <form-group label='选择类型'>
        <selector v-ref:testing-type :options='alphabetTestTypes' :default-value='3'></selector>
      </form-group>

      <form-group label='选择调性'>
        <alphabet-selector v-ref:alphabet type='checkbox' :value='[]'></alphabet-selector>
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

    {{ testing | json}}
    {{ error }}
  </div>
</template>

<script>
// import TitleBar from 'components/title-bar'
import FormGroup from 'components/form-group'
import AlphabetSelector from 'components/alphabet-selector'
import TestingMode from 'components/testing-mode'
import Selector from 'components/selector'

import {AlphabetTestConsts, TestModeConsts} from 'components/consts/types'
import TestingActions from 'actions/testing'
import {TestingTypes} from 'models/testing'
import _ from 'lodash'

export default {

  name: 'test-create',
  components: {
    // TitleBar,
    FormGroup,
    AlphabetSelector,
    TestingMode,
    Selector
  },
  vuex: {
    actions: TestingActions,
    // getters: {
    //   testing: state => state.testing.current
    // }
  },
  data() {
    return {
      alphabetTestTypes: AlphabetTestConsts.typeLabels,
      testMode: TestModeConsts.mode.TIME,
      testing: null,
      error: false,
      success: false
    };
  },
  methods: {
    handleCreate() {
      this.error = false
      this.success = false

      let testingType = this.$refs.testingType.getValue()
      let alphabet = this.$refs.alphabet.getValue()
      let testingMode = this.$refs.testingMode.getValue()
      let config = {testingType, alphabet, testingMode}
      let testing = this.createTest(TestingTypes.alphabetSolfa, config)
      if (!testing) {
        this.error = true
        return
      } else {
        this.success = true
      }

      this.testing = testing

      _.delay(() => {
        this.$route.router.go({
          name: 'app-alphabet-solfa-tests-start',
          params: {
            test_id: testing.id
          }
        })
      }, 500);
    },

    handleCloseError() {
      this.error = false
    }
  }
};
</script>

<style lang="css" scoped>
</style>