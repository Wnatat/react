export default class PreviewPresenter {
  constructor(useCase, component) {
    this.preview = useCase.call()
    this.component = component
  }

  call() {
    this.component.props.thumbs(this.preview)

    this.component.setState({
      files: this.preview,
      progress: 0
    })
  }
}