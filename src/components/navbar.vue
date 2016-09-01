<template>
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
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">乐理 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" v-link="{name: 'mt-h-wheel'}" @click='handleLink'>H-Wheel</a></li>
            <li><a href="#" v-link="{name: 'mt-standard'}" @click='handleLink'>基本</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">测试 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" v-link="{name: 'app-alphabet-solfa'}" @click='handleLink'>音名唱名转换</a></li>
          </ul>
        </li>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {

  name: 'navbar',

  data() {
    return {

    };
  },

  methods: {
    handleLink() {
      $('#bs-example-navbar-collapse-1').collapse('hide')
    }
  }
};
</script>

<style lang="css" scoped>
</style>