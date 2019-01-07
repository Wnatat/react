import UploadOptionsPresenter from './UploadOptionsPresenter'

describe('UploadOptionsPresenter', () => {
  it('can present options for remote service gateway', () => {
    // Arrange
    const componentMock = {}
    const onUploadProgress = () => {}

    const uploadOptionsPresenter = new UploadOptionsPresenter(componentMock)

    // Act
    const options = uploadOptionsPresenter.call()

    // Assert
    expect(options).toEqual(expect.objectContaining({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    }))
    expect(JSON.stringify(options.onUploadProgress)).toEqual(JSON.stringify(onUploadProgress))
  })
})