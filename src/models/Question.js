import _ from 'lodash'

export const Mode = {
  Single: 'single',
  Multi: 'multi'
}

export default class Question {

  /**
   * title String
   * mode String
   * options Array - 选项
   * corrects Array - 正确答案
   */
  constructor({title, mode, options, corrects}) {
    this.title = ''
    this.mode = mode
    this.options = options
    this.corrects = corrects
  }

  test(answer) {
    return _.difference(this.corrects, answer.selection)
  }
}