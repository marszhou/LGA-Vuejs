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




          <router-view class="view" transition="test" transition-mode="out-in"></router-view>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import store from 'src/vuex/store'
import Breadcrumbs from 'components/breadcrumbs'
import Navbar from 'components/navbar'

export default {
  store,
  components: {
    Breadcrumbs,
    Navbar
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

input:focus,
select:focus,
textarea:focus,
a:focus,
button:focus {
  outline: 0!important;
}
</style>
