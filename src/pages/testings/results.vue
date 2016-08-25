<template>

  <div v-if='testing'>
    <h2>测试 - {{testing.type.display}} - 查看结果</h2>
    <testing-info :testing='testing' ></testing-info>
    <table class="table table-striped table-bordered">
      <tr>
        <th><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span></th>
        <th><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></th>
        <th><span class="glyphicon glyphicon-hand-down" aria-hidden="true"></span></th>
        <th></th>
      </tr>
      <tr v-for='item of testing.items'>
        <td>
          <strong>({{item.question.name}})</strong> {{item.question.title}}
        </td>
        <td>
          <span style='color: darkgreen; font-weight: bold'>{{item.question.corrects}}</span>
        </td>
        <td>
          {{item.answer.selection}}
        </td>
        <td>
          <span class="glyphicon glyphicon-ok" aria-hidden="true" v-if='item.answer.result' style='color: darkgreen'></span>
          <span class="glyphicon glyphicon-remove" aria-hidden="true" v-if='!item.answer.result' style='color:red'></span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import TestingActions from 'actions/testing'
import TestingInfo from 'components/testing-info'
export default {

  name: 'testing-results',

  components: {
    TestingInfo
  },

  vuex: {
    actions: TestingActions,
    getters: {
      testing: state => state.testing.current
    }
  },

  data() {
    return {

    };
  },

  computed: {

  },

  methods: {

  },

  route: {

  },
  attached() {
    this.setCurrent(this.$route.params.testing_id)
  }
};
</script>

<style lang="css" scoped>
</style>