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
  'TOGGLE_FOOTER',
  'SET_BREADCRUMB'
])

export const testing = cv([
  'TESTING_CREATE',
  'TESTING_ADD',
  'TESTING_LIST',
  'TESTING_GET',
  'TESTING_BEGIN'
])