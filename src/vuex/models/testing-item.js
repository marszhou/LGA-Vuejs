export default class TestingItem {
  constructor({question, answer}) {
    this.question = question
    this.answer = answer
    this.confirmed = false // 答案已经确认
  }

  result() {
    return this.question.test(this.answer)
  }
}