import $ from 'jquery'
import _ from 'lodash'
import store from 'src/vuex/store'
import {sprintf} from 'sprintf-js'

const SS = window.sessionStorage
const LS = window.localStorage
const tinyFileUrl = 'https://app.huoban.com/favicon.ico'

export const refreshTitle = title => {
  $(`<iframe width="0" height="0" src="${tinyFileUrl}" style="display: none"></iframe>`)
    .one('load', function(e) {
      setTimeout(n => this.parentNode.removeChild(this), 0)
    })
    .appendTo(document.body)
}

export const sStor = (key, val) => {
  if (typeof val != 'undefined') {
    if (val === null) {
      SS.removeItem(key)
    } else {
      SS.setItem(key, JSON.stringify(val))
    }
  } else {
    return JSON.parse(SS.getItem(key))
  }
}

export const lStor = (key, val) => {
  if (typeof val != 'undefined') {
    if (val === null) {
      LS.removeItem(key)
    } else {
      LS.setItem(key, JSON.stringify(val))
    }
  } else {
    return JSON.parse(LS.getItem(key))
  }
}

export function timeNearly(date, rangeSecs) {
  let diff = Math.abs(new Date(date.replace(/\-/g, '/')).getTime() - (+new Date()))
  return diff / 1000 <= rangeSecs
}

export function isEqualByKeys(a, b, keys = [], strict = false) {
  let inKeys = _.keys(a)
  if (keys.length) {
    inKeys = _.intersection(inKeys, keys)
  }
  return inKeys.length ? _.every(inKeys, k => strict ? a[k] === b[k] : a[k] == b[k]) : false
}

export function splitParams(argString, sep = '/') {
  let argArr = (argString + '').trim(sep).split(sep)
  let params = _.reduce(argArr, (ret, v, i) => {
    if (i % 2 == 0) {
      if (argArr[i+1] || argArr[i+1] === 0) {
        ret[v] = argArr[i+1]
      }
    }
    return ret
  }, {})

  return params
}

export function joinParams(args, eq = '/', sep = '/', encode = true) {
  let argArr = _.reduce(args, (ret, v, k) => {
    ret.push(`${k}${eq}${encode ? encodeURIComponent(v) : v}`)
    return ret
  }, [])

  return argArr.join(sep)
}

export function redirectToWechatAuth(path, {app_id, scope, state}, replace) {
  const baseHost = 'https://open.weixin.qq.com/connect/oauth2/authorize'

  scope = 'snsapi_userinfo'

  let localUrl = location.origin + (store.state.usePushState ? '' : '/#!') + path
  // 由于服务号目前回调地址绑定为h5.huoban.com，所以临时加个中转地址
  let middleUrl = 'https://h5.huoban.com/redirect?url='+encodeURIComponent(localUrl)

  // 本地加host伪装回调页，方便调试
  // middleUrl = 'http://h5.huoban.com' +(store.state.usePushState ? '' : '/#!') +'/redirect?url='+encodeURIComponent(url)

  let jUrl = `${baseHost}?appid=${app_id}&redirect_uri=${encodeURIComponent(middleUrl)}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`

  if (replace) {
    window.location.replace(jUrl)
  } else {
    window.location.href = jUrl
  }
}

export function genHash(scope, params = {}, minify) {
  const objHash = obj => {
    return _.reduce(obj, (r, v, k) => {
      return r + _.reduce(`${k}=${v}`, (r, s) => r+s.charCodeAt(0), 0)
    }, 0)
  }

  let suffix = ''
  if (!_.isEmpty(params)) {
    let hashParams = _.mapValues(params, (value, key) => {
      return _.isPlainObject(value) ? objHash(value) : encodeURIComponent(value)
    })

    if (minify) {
      suffix = `_${objHash(hashParams)}`
    } else {
      suffix = _.reduce(hashParams, (r, v, k) => {
        return r.length > 1 ? `${r}_${k}_${v}` : `${r}${k}_${v}`
      }, '_')
    }
  }

  return scope + suffix
}

export function cutStringByWidth(str = '', width = 0, dot = '..') {
  let strEn = str.replace(/[\u4E00-\u9FA5‘“”【】（）。；：，？！《》『』￥·]/ig, '^^')
  if (width && strEn.length > width) {
    let subLen = 0
    let curLen = 0
    width -= dot.length
    _.forEach(strEn.split('^^'), word => {
      curLen += word.length
      if (curLen <= width) {
        subLen += word.length
        curLen += 2
        if (curLen <= width) {
          subLen += 1
        } else {
          return false
        }
      } else {
        subLen += word.length - (curLen - width)
        return false
      }
    })

    str = str.substr(0, subLen) + '..'
  }
  return str
}

export function getDomain(url) {
  let match = /^(?:https?:\/\/)?([^\/]+)/i.exec(url)

  return match && match[1] ? match[1] : ''
}

export function toNumber(val) {
  return +val
}

export function timeDisplay(ms) {
  let s = Math.round(ms / 1000)
  let hh = Math.floor(s / 3600)
  let mm = Math.floor((s % 3600) / 60)
  let ss = (s % 60)

  // console.log(hh, mm, ss)

  return sprintf('%02d:%02d:%02d', hh, mm, ss)
}

export function percent(val) {
  return sprintf('%0.1f%%', val * 100)
}

export function uniqueKey() {
  return Math.random().toString(36).substring(7)
}

export function resourceMaker(ajaxResources=[], normalResources=[], prefix='') {
  let ret = _.reduce(ajaxResources, (ret, val) => {
    ret[`${val}`] = `${prefix}${val}`
    ret[`${val}_REQ`] = `${prefix}${val}_REQ`
    ret[`${val}_FAIL`] = `${prefix}${val}_FAIL`
    return ret
  }, {})

  ret = _.reduce(normalResources, (ret, val) => {
    ret[`${val}`] = `${prefix}${val}`
    return ret
  }, ret)

  return ret
}