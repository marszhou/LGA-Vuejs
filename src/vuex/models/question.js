import _ from 'lodash'

export const Mode = {
  Single: 'single',
  Multiple: 'multiple'
}

export function factory() {

}

export default class Question {

  /**
   * title String - 题目问题
   * name - 题目主干
   * mode String - single/multiple
   * options Array - 选项
   * corrects Array - 正确答案
   */
  constructor({title, name, mode, options, corrects}) {
    this.title = title
    this.name = name
    this.mode = mode
    this.options = options
    this.corrects = corrects
  }

  test(answer) {
    return _.difference(this.corrects, answer.selection)
  }
}