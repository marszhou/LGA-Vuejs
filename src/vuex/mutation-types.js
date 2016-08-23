import _ from 'lodash'
import {resourceMaker} from 'utils'

// 全局动作
export const global = resourceMaker([], [
  'SET_TITLE',
  'TOGGLE_FOOTER',
  'SET_BREADCRUMB'
])

export const testing = resourceMaker([], [
  'CREATE',
  'ADD',
  'LIST',
  'GET',
  'BEGIN',
  'FINISHED',
  'CONTINUE',
  'VIEW',
  'UPDATE',
  'NEXT'
], 'TESTING_')

export const testingItem = resourceMaker([], [
  'GET',
  'ANSWER'
], 'TESTING_ITEM_')