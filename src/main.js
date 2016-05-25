import Vue from 'vue'
import Validator from 'vue-validator'
import Router from 'vue-router'
import {sync} from 'vuex-router-sync'
import App from './App'

Vue.use(Validator)



Vue.config.debug = true
/* eslint-disable no-new */

new Vue({
  el: 'body',
  components: { App }
})
