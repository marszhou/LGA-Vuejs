export default class BaseModel {
  setStorage(storage) {
    this.storage = storage
  }

  save() {
    return this.storage.save(this)
  }
}