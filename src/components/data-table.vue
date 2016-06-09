<template>
  <table class="table table-hover">
    <caption>{{checked | json}}</caption>
    <thead>
      <tr>
        <th v-if='hasCheckbox'>
          <label title='全选'>
            <input type='checkbox'
                   ref='checkAll'
                   :checked='allChecked'
                   @click='handleCheckAll'>
          </label>
        </th>
        <th v-if='hasIndex' @click='handleHeadClick("index", $event)'>#</th>
        <th v-for='(index, header) of headers' @click='handleHeadClick(index, $event)'>{{header}}</th>
        <th v-if='!!controls'></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='(index, row) of rows' @click='handleRowClick(index, $event)'>
        <td v-if='hasCheckbox'>
          <input type='checkbox'
                 v-model='checked'
                 :value='index'
                 @change='handleCheck'>
        </td>
        <th scope="row" v-if='hasIndex'>{{index + 1}}</th>
        <td v-for='value of row'>{{value}}</td>
        <td v-if='!!controls'>
          <div class="btn-group" role="group" aria-label="...">
            <button v-for='(btnIndex, control) of controls'
                    class='btn btn-xs'
                    :class='control.class'
                    @click='handleBtnClick(index, btnIndex, $event)'>
              {{control.label}}
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import _ from 'lodash'

import {DataTable as events} from './consts/events'
import _ from 'lodash'

export default {

  name: 'data-table',

  props: {
    headers: Array,
    rows: Array,
    controls: Array,
    hasIndex: Boolean,
    hasCheckbox: Boolean
  },

  data() {
    return {
      checked: []
    };
  },

  computed: {
    allChecked() {
      let all = this.rows.map((__, index) => index)
      return _.difference(all, this.checked).length === 0
    }
  },

  methods: {
    handleRowClick(index, e) {
      this.$$dispatch(events.RowClick, arguments)
    },
    handleBtnClick(rowIndex, btnIndex, e) {
      e.stopPropagation()
      this.$$dispatch(events.ButtonClick, arguments);
    },
    handleHeadClick(columnIndex, e) {
      // console.log(arguments);
      this.$$dispatch(events.HeadClick, arguments);
    },
    handleCheckAll(e) {
      let checked = e.target.checked

      let values = []
      if (checked) {
        values = this.rows.map((__, index) => index)
      }

      this.checked = values
      this.triggerCheckedEvent(this.checked.slice(), e)
    },

    handleCheck(e) {
      e.stopPropagation()
      this.triggerCheckedEvent(this.checked.slice(), e)
    },

    triggerCheckedEvent() {
      this.$$dispatch(events.Checked, arguments)
    }
  },


};


</script>

<style lang="css" scoped>
</style>