export default class UploadOptionsPresenter {
  constructor(component) {
    this.component = component
  }

  call() {
    return this.allOptions()
  }

  options() {
    return {
      onUploadProgress: (progressEvent) => {
        this.component.props.progress(progressEvent.loaded, progressEvent.total)
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