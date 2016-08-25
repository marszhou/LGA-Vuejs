export default class Answer {
  constructor(selection=[], result=false) {
    this.selection = selection
    this.result = result
  }

  setSelection(selection) {
    this.selection = selection
  }
}