export default class BindingResolutionError extends Error {

  constructor(message) {
    super(message)
    this.name = 'BindingResolutionError'
    Object.setPrototypeOf(this,  BindingResolutionError.prototype)
  }

}