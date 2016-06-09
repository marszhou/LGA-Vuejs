import Vue from 'vue'
import Validator from 'vue-validator'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import {sync} from 'vuex-router-sync'
import store from 'src/vuex/store'
import configRouter from './routes'
import App from './App'

require('bootstrap/dist/css/bootstrap.css')
require('bootstrap/dist/js/bootstrap.js')


Vue.use(Validator)
Vue.use(VueRouter)
Vue.use(VueI18n)

Vue.mixin({
  methods: {
    $$dispatch(eventName, args) {
      var argsCopy = Array.prototype.slice.call(args)
      argsCopy.unshift(eventName)
      this.$dispatch.apply(this, argsCopy)
    }
  }
})

let router = new VueRouter({
  hashbang: true,
  history: store.state.usePushState,
  saveScrollPosition: true,
  suppressTransitionError: store.state.isProduction,
  transitionOnLoad: false,
  linkActiveClass: 'current'
})

if (configRouter(router, store) !== false) {
  sync(store, router)
  router.start(App, 'app')
  window.router = router
}

// let Foo = Vue.extend({
//   template: '<p>This is foo!</p>'
// })

// let Bar = Vue.extend({
//   template: '<p>This is bar!</p>'
// })

// let router = new VueRouter({
//   hashbang: true,
//   history: store.state.usePushState,
//   saveScrollPosition: true,
//   suppressTransitionError: store.state.isProduction,
//   transitionOnLoad: false,
//   linkActiveClass: 'current'
// })

// router.map({
//   '/foo': {
//     component: Foo
//   },
//   '/bar': {
//     component: Bar
//   },
//   '/home': {
//     component: require('views/home')
//   }
// })
// sync(store, router)
// router.start(App, 'app')