export default class UploadPresenter {
  constructor(useCase, callback, files) {
    this.upload = useCase.call(files)
    this.callback = callback
  }

  call() {
    this.upload
      .then(res => {
        this.callback(this.getTags(res.data))
      })
  }

  getTags(data) {
    return data.result.tags.map(tag => tag.tag.en)
  }
}