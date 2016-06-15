import {testing} from '../mutation-types'

export default {
  create({dispatch}, config) {
    console.log('testing action create')
    dispatch(testing.CREATE, config)
  }
}