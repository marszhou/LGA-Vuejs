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
        <alphabet-selector type='checkbox' v-ref:tone></alphabet-selector>
      </form-group>

      <div class="form-group">
        <label class="col-md-2 control-label" for="exampleInputPassword1">选择测试类型</label>
        <div class="col-md-6">
          <select class="form-control" id="exampleInputEmail1">
            <option value='1'>限制时间</option>
            <option value='2'>限制数量</option>
            <option value='3'>无限制</option>
          </select>
        </div>
        <div class='col-md-4'>
          <div class="input-group">
            <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
            <div class="input-group-addon">分钟</div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class='col-md-offset-2 col-md-2 col-xs-offset-0 col-xs-12'>
          <button type="button" class="btn btn-info btn-block">创建</button>
        </div>
      </div>

    </form>

    <hr/>

    <div class="page-header container-fluid">
      <div class="row test-title">
        <div class="col-md-3 title">唱名音名转换测试</div>
        <div class="col-md-5 time">时间：05:00/30:00</div>
        <div class="col-md-2 progressing">
          完成度：60%

        </div>
        <div class="col-md-1 col-xs-6 operation text-right"><button type='button' class='btn btn-info btn-block'>暂停</button></div>
        <div class="col-md-1 col-xs-6 operation text-right"><button type='button' class='btn btn-danger btn-block'>退出</button></div>
      </div>
    </div>

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
import {DataTable as DataTableEvents, AlphabetSelector as AlphabetSelectorEvents} from 'components/consts/events'

import Breadcrumbs from 'components/breadcrumbs'
import Navbar from 'components/navbar'
import ListTitleBar from 'components/list-title-bar'
import DataTable from 'components/data-table'
import Pagination from 'components/pagination'
import FormGroup from 'components/form-group'
import AlphabetSelector from 'components/alphabet-selector'

export default {
  components: {
    Breadcrumbs,
    Navbar,
    ListTitleBar,
    DataTable,
    Pagination,
    FormGroup,
    AlphabetSelector
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
      debugger
    }

    // [PaginationEvents.Page]() {
    //   console.log('pagination.page', arguments)
    // }
  },

  methods: {
    handlePage() {
      console.log(arguments);
    }
  }
}
</script>