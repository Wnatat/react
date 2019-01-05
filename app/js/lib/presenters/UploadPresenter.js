export default class UploadPresenter {
  constructor(useCase, component, files) {
    this.upload = useCase.call(files)
    this.component = component
  }

  call() {
    this.upload
      .then(res => {
        this.component.props.tags(this.getTags(res.data))
      })
  }

  getTags(data) {
    return data.result.tags.map(tag => tag.tag.en)
  }
}