import Vue from 'vue'
import * as types from '../types'
import {refreshTitle} from 'utils'

const {SET_TITLE, TOGGLE_FOOTER} = types.global

const UA = navigator.userAgent
const isInWechat = UA.indexOf('MicroMessenger') > 0
const isMQQ = !isInWechat && UA.indexOf('MQQBrowser') > 0
const isQQ = !isInWechat && !isMQQ && UA.indexOf('QQ') > 0
const isChrome = UA.match(/Chrome/i) != null && UA.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null
const isAndroid = !!UA.match(/(Android);?[\s\/]+([\d.]+)?/)
const isIPad = !!UA.match(/(iPad).*OS\s([\d_]+)/)
const isIPhone = !isIPad && !!UA.match(/(iPhone\sOS)\s([\d_]+)/)
const isSafari = (isIPad || isIPhone) && !!UA.match(/Safari/)

let safariVersion = 0
if (isSafari) {
  let vMatch = UA.match(/Version\/([\d\.]+)/)
  if (vMatch) {
    safariVersion = parseFloat(vMatch[1], 10)
  }
}

const companyName = '@MattZhou'

// 子模块的数据，作为全局store下state的sub-tree
const state = {
  lang: navigator.language,
  ua: UA,
  isChrome,
  isAndroid,
  isIPad,
  isIPhone,
  isInWechat,
  isQQ,
  isMQQ,
  isSafari,
  safariVersion,
  appReady: false,
  showFooter: false,
  docTitle: '',
  enterLocation: window.location.href,
  docOrigin: 'http://app.huoban.com/'
}

// 对子模块数据的操作
const mutations = {
  [SET_TITLE](state, title, addName) {
    let arr = (title ? [].concat(Vue.t(title)) : []).concat(addName ? Vue.t(companyName) : [])
    let tt = arr.join('_') || companyName

    document.title = tt
    if (state.isInWechat && state.isIPhone) {
      refreshTitle(tt)
    }

    state.docTitle = tt
  },

  [TOGGLE_FOOTER](state, show) {
    state.showFooter = show
  }
}

export default {
  state,
  mutations
}
