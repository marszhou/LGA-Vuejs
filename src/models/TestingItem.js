export default class TestingItem {
  constructor({question, answer}) {
    this.question = question
    this.answer = answer
  }

  result() {
    return this.question.test(this.answer)
  }
}