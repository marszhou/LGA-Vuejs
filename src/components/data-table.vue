<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th v-if='hasIndex' @click='handleHeadClick("index", $event)'>#</th>
        <th v-for='(index, header) of headers' @click='handleHeadClick(index, $event)'>{{header}}</th>
        <th v-if='!!controls'></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='(index, row) of rows' @click='handleRowClick(index, $event)'>
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

export default {

  name: 'data-table',

  props: {
    headers: Array,
    rows: Array,
    controls: Array,
    hasIndex: Boolean
  },

  data() {
    return {

    };
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
    }
  }
};


</script>

<style lang="css" scoped>
</style>