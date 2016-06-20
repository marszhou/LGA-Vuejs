import {testing} from '../mutation-types'

export default {
  createTest({dispatch}, type, config) {
    console.log('testing action create', testing)
    dispatch(testing.CREATE, type, config)
  }
}