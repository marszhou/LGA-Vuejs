import _ from 'lodash'

const cv = (arr) => {
  return _.reduce(arr, (ret, val) => {
    if (val) {
      ret[val] = val
    }
    return ret
  }, {})
}

// 全局动作
export const global = cv([
  'SET_TITLE',
  'TOGGLE_FOOTER'
])

// 登录页相关
export const portal = cv([
  'LOG_IN_REQ',
  'LOG_IN',
  'LOG_IN_FAIL',
  'REGISTER_REQ',
  'REGISTER',
  'REGISTER_FAIL',
  'RESET_REQ',
  'RESET',
  'RESET_FAIL',
  'GET_INVITER_REQ',
  'GET_INVITER',
  'GET_INVITER_FAIL',
  'GET_SPACE_INVITER_REQ',
  'GET_SPACE_INVITER',
  'GET_SPACE_INVITER_FAIL',
  'GET_CAPTCHA_REQ',
  'GET_CAPTCHA',
  'GET_CAPTCHA_FAIL',
  'GET_CAPTCHA_CODE_REQ',
  'GET_CAPTCHA_CODE',
  'GET_CAPTCHA_CODE_FAIL',
  'CLEAN_ERROR',
  'GET_WECHAT_PARAM_REQ',
  'GET_WECHAT_PARAM',
  'GET_WECHAT_PARAM_FAIL'
])

// 工作区首页(表格列表/成员列表)
export const home = cv([

])

// 表格数据列表页
export const app = cv([
  'GET_ITEMLIST_REQ',
  'GET_ITEMLIST',
  'GET_ITEMLIST_FAIL',
  'GET_MOBILEAPPLAYOUT_REQ',
  'GET_MOBILEAPPLAYOUT',
  'GET_MOBILEAPPLAYOUT_FAIL'
])

// 工作区
export const space = cv([
  'GET_SPACELIST_REQ',
  'GET_SPACELIST',
  'GET_SPACELIST_FAIL',

  'GET_APPLIST_REQ',
  'GET_APPLIST',
  'GET_APPLIST_FAIL',
  'GET_SPACEINFO_REQ',
  'GET_SPACEINFO',
  'GET_SPACEINFO_FAIL',
  'GET_SPACEMEMBERS_REQ',
  'GET_SPACEMEMBERS',
  'GET_SPACEMEMBERS_FAIL',
  'GET_APP_REQ',
  'GET_APP',
  'GET_APP_FAIL'
])

// 单条item相关
export const item = cv([
  'GET_ITEMDETAIL_REQ',
  'GET_ITEMDETAIL',
  'GET_ITEMDETAIL_FAIL'
])

// 用户相关
export const user = cv([
  'GET_USERINFO_REQ',
  'GET_USERINFO',
  'GET_USERINFO_FAIL',
  'UPDATE_USER_REQ',
  'UPDATE_USER',
  'UPDATE_USER_FAIL',
  'LOG_OUT_REQ',
  'LOG_OUT',
  'JOIN_SPACE_REQ',
  'JOIN_SPACE',
  'JOIN_SPACE_FAIL',
  'BIND_ACCOUNT_REQ',
  'BIND_ACCOUNT',
  'BIND_ACCOUNT_FAIL',
  'DESTROY_ACCOUNT_REQ',
  'DESTROY_ACCOUNT',
  'DESTROY_ACCOUNT_FAIL',
  'SET_BEHAVIOR'
])