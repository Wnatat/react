export default class PreviewPresenter {
  constructor(useCase, thumbsCallback, stateCallback) {
    this.preview = useCase.call()
    this.thumbsCallback = thumbsCallback
    this.stateCallback = stateCallback
  }

  call() {
    this.thumbsCallback(this.preview)

    this.stateCallback({
      files: this.preview,
      progress: 0
    })
  }
}