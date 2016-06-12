<template>
  <div>
    <list-title-bar title='历史'>
      <button type='button' class='btn btn-info btn-block'>创建</button>
    </list-title-bar>

    <data-table :headers='tableData.headers'
                :rows='tableData.rows'
                :controls='tableData.controls'
                :has-index='true'
                :has-checkbox='true'>
    </data-table>


    <pagination :record-count='1000'
                @pagination:page='handlePage'>
    </pagination>

    <hr/>

    <form class='form-horizontal'>
      <form-group label='选择类型'>
        <select class="form-control" id="exampleInputEmail1">
          <option value='1'>唱名转音名</option>
          <option value='2'>音名转唱名</option>
          <option value='3'>混合</option>
        </select>
      </form-group>

      <form-group label='选择调性'>
        <alphabet-selector type='checkbox' v-ref:tone :value='["a", "C"]'></alphabet-selector>
      </form-group>

      <form-group label='选择测试模式' :multi='true'>
        <testing-mode></testing-mode>
      </form-group>

      <div class="form-group">
        <div class='col-md-offset-2 col-md-2 col-xs-offset-0 col-xs-12'>
          <button type="button" class="btn btn-info btn-block">创建</button>
        </div>
      </div>

    </form>

    <hr/>

    <testing-title title='音名唱名转换' :mode='1' :duration='1800' :total='20'></testing-title>

    <div class='jumbotron question'>
      question
    </div>

    <div>是以下：</div>

    <div class='jumbotron answer'>
      answer
    </div>

    <hr/>
  </div>
</template>

<script>
import {DataTableEvents, AlphabetSelectorEvents, TestingEvents} from 'components/consts/events'

import Breadcrumbs from 'components/breadcrumbs'
import Navbar from 'components/navbar'
import ListTitleBar from 'components/list-title-bar'
import DataTable from 'components/data-table'
import Pagination from 'components/pagination'
import FormGroup from 'components/form-group'
import AlphabetSelector from 'components/alphabet-selector'
import TestingMode from 'components/testing-mode'
import TestingTitle from 'components/testing-title'

import Question from 'models/Question'

export default {
  components: {
    Breadcrumbs,
    Navbar,
    ListTitleBar,
    DataTable,
    Pagination,
    FormGroup,
    AlphabetSelector,
    TestingMode,
    TestingTitle
  },

  data() {
    return {
      tableData: {
        headers: ['a', 'b', 'c'],
        rows: [
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ],
        controls: [
          {label: 'OK', 'class': 'btn-primary'},
          {label: 'Retry'},
          {label: 'Cancel', 'class': 'btn-danger'}
        ]
      }
    }
  },

  events: {
    [DataTableEvents.RowClick]() {
      console.log('rowclick', arguments)
    },
    [DataTableEvents.ButtonClick]() {
      console.log('btnclick', arguments)
    },
    [DataTableEvents.HeadClick]() {
      console.log('headclick', arguments)
    },
    [DataTableEvents.Checked]() {
      console.log('checked', arguments)
    },

    [AlphabetSelectorEvents.Checked]() {
      console.log('alphabet selector checked', arguments, this.$refs.tone.checked)
    },

    [TestingEvents.Pause]() {
      console.log('testing pause')
    },

    [TestingEvents.Quit]() {
      console.log('testing quit')
    }

    // [PaginationEvents.Page]() {
    //   console.log('pagination.page', arguments)
    // }
  },

  methods: {
    handlePage() {
      console.log(arguments);
    }
  },

  created() {
    let q = new Question({
      title: '123'
    })
    console.log(q)
  }
}
</script>