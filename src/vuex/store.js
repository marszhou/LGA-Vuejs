import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import global from './modules/global'
import testing from './modules/testing'

console.log(global)

Vue.use(Vuex)

const isProduction = !!(0 || process.env.NODE_ENV === 'production')
const isDebug = !!(0 || !isProduction)
const usePushState = !global.state.isInWechat

Vue.config.debug = isDebug

export default new Vuex.Store({
  modules: {
    global,
    testing
  },
  state: {isProduction, isDebug, usePushState},
  strict: isDebug,
  middlewares: isDebug ? [createLogger()] : []
})
