<template>
  <div id="app">

    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" v-link="{path:'/'}"><div class='emoji'>🎸</div> Learn Guitar App</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <a href="#" v-link="{name: 'app-alphabet-solfa-tests-create'}">
                音名&lt;&gt;唱名
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <!--
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">工具箱 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">音名唱名转换</a></li>
              </ul>
            </li>
            -->
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">音名唱名转换</a></li>
      <li class="active">创建</li>
      {{breadcrumbs}}
    </ol>

    <div class="panel panel-default">

      <div class="panel-body">

        <div class="container-fluid">
          <div class="row test-title">
            <div class="col-md-11 title">历史记录</div>
            <div class="col-md-1 operation text-right"><button type='button' class='btn btn-info btn-block'>创建测试</button></div>
          </div>
        </div>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>时间</th>
              <th>描述</th>
              <th>成绩</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>


        <nav class='text-center'>
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

        <hr/>

        <form class='form-horizontal'>
          <div class="form-group">
            <label class="col-md-2 control-label" for="formGroupInputLarge">选择类型</label>
            <div class="col-md-10">
              <select class="form-control" id="exampleInputEmail1">
                <option value='1'>唱名转音名</option>
                <option value='2'>音名转唱名</option>
                <option value='3'>混合</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-2 control-label" for="exampleInputPassword1">选择调性</label>
            <div class="col-md-10">
              <label class='checkbox-inline'><input type='checkbox'/>全选</label>
            </div>
            <div class='col-md-10 col-md-offset-2'>
              <label class='checkbox-inline'><input type='checkbox'/>C大调</label>
              <label class='checkbox-inline'><input type='checkbox'/>D大调</label>
              <label class='checkbox-inline'><input type='checkbox'/>E大调</label>
              <label class='checkbox-inline'><input type='checkbox'/>F大调</label>
            </div>
            <div class='col-md-10 col-md-offset-2'>
              <label class='checkbox-inline'><input type='checkbox'/>c小调</label>
              <label class='checkbox-inline'><input type='checkbox'/>d小调</label>
              <label class='checkbox-inline'><input type='checkbox'/>e小调</label>
              <label class='checkbox-inline'><input type='checkbox'/>f小调</label>
            </div>
          </div>

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
</template>

<script>
import store from 'src/vuex/store'
import Hello from './components/Hello'

export default {
  store,
  components: {
    Hello
  },
  vuex: {
    getters: {
      breadcrumbs: state => state.global.breadcrumbs.join(',')
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
