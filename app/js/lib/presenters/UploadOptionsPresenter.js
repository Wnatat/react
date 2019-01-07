export default class UploadOptionsPresenter {
  constructor(callback) {
    this.callback = callback
  }

  call() {
    return this.allOptions()
  }

  options() {
    return {
      onUploadProgress: (progressEvent) => {
        this.callback(progressEvent.loaded, progressEvent.total)
      }
    }
  }

  headers() {
    return {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    }
  }

  allOptions() {
    return Object.assign({}, this.options(), this.headers())
  }
}