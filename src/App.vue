<template>
  <div class='container-fluid'>

    <div id="app">

      <navbar></navbar>

      <breadcrumbs></breadcrumbs>

      <!-- <ol class="breadcrumb">
        <li><a href="#" v-link="{name: 'home'}">Home</a></li>
        <li v-for="bc in breadcrumbs">
          <a href='#' v-link="{name: bc.name}" v-if='!!bc.name'>{{ bc.display }}</a>
          <template v-else>{{ bc.display }}</template>
        </li>
      </ol> -->

      <div class="panel panel-default">

        <div class="panel-body">


          <list-title-bar title='历史'>
            <button type='button' class='btn btn-info btn-block'>创建</button>
          </list-title-bar>

          <data-table></data-table>


          <pagination></pagination>

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
              <alphabet-selector type='checkbox'></alphabet-selector>
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

          <router-view class="view" transition="test" transition-mode="out-in"></router-view>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import store from 'src/vuex/store'
import Hello from './components/Hello'
import Breadcrumbs from 'components/breadcrumbs'
import Navbar from 'components/navbar'
import ListTitleBar from 'components/list-title-bar'
import DataTable from 'components/data-table'
import Pagination from 'components/pagination'
import FormGroup from 'components/form-group'
import AlphabetSelector from 'components/alphabet-selector'

export default {
  store,
  components: {
    Hello,
    Breadcrumbs,
    Navbar,
    ListTitleBar,
    DataTable,
    Pagination,
    FormGroup,
    AlphabetSelector
  },
  vuex: {
    getters: {
    }
  },

  ready() {
    let loadingEle = document.querySelector('#landing_loading')
    if (loadingEle) {
      loadingEle.classList.add('done')
      setTimeout(function(el) {
        el.parentNode.removeChild(el)
      }, 1500, loadingEle)
    }
  }
}
</script>

<style>
.view {
  transition: all 0.0s ease;
}
.test-enter, .test-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}

.title{
  font-size: +100%;
  font-weight: bold;
}

.test-title div {
  height: 34px;
  line-height: 34px;
  font-size: 120%;
  /*border: 1px solid black;*/
  /*margin: 0 -10px;*/
  padding-left: 5px;
  padding-right: 0px;
}

.emoji {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5em;
  text-align: center;
  font-size: 0.8em;
  border: 1px solid gray;
  background: gray;
  border-radius: 1em;
  opacity: 0.8;
}
</style>
