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
        <selector :options='alphabetTestTypes' :default-value='3'></selector>
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

    <div v-for='(x,y) of my'>{{x}}{{y}}</div>

    <hr/>

    <!-- Small modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Small modal</button>

      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    <dialog title='hey' :dialog-id='dialogId'>
      <button slot='trigger'
              type="button"
              class="btn btn-primary">dialog</button>
      <div slot='dialog-body'>hello world</div>

    </dialog>

    <dialog title='show by link' :dialog-id='dialogId2'>
      <a slot='trigger'
         href='###'>link dialog</a>
      <div slot='dialog-body'>hello world</div>
    </dialog>

    <dialog title='auto show' :dialog-id='dialogId3' :auto-show='false'>
      <a slot='trigger'
         href='###'>auto dialog</a>
      <div slot='dialog-body'>hello world</div>
    </dialog>

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
import Selector from 'components/selector'
import Dialog from 'components/dialog'

import AlphabetSolfaFactory from 'models/factories/AlphabetSolfaFactory'

import {AlphabetTestConsts} from 'components/consts/types'
import {uniqueKey} from 'utils'

// console.log(AlphabetTestConsts.typeLabels)

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
    TestingTitle,
    Selector,
    Dialog
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
      },

      alphabetTestTypes: AlphabetTestConsts.typeLabels,

      my: {
        a: 1, b: 2
      },

      dialogId: uniqueKey(),
      dialogId2: uniqueKey(),
      dialogId3: uniqueKey()
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
    let q = AlphabetSolfaFactory()
    console.log(q)
  }
}
</script>