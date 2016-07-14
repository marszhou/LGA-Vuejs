import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import global from './modules/global'
import testing from './modules/testing'
import testingItem from './modules/testing-item'

Vue.use(Vuex)

const isProduction = !!(0 || process.env.NODE_ENV === 'production')
const isDebug = !!(0 || !isProduction)
const usePushState = !global.state.isInWechat

Vue.config.debug = isDebug

export default new Vuex.Store({
  modules: {
    global,
    testing,
    testingItem
  },
  state: {isProduction, isDebug, usePushState},
  strict: isDebug,
  middlewares: isDebug ? [createLogger()] : []
})
