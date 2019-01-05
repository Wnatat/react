import UploadPresenter from '../../../app/js/lib/presenters/UploadPresenter'
import UseCase from '../../../app/js/lib/useCases/UploadUseCase'

describe('UploadPresenter', () => {
  it('can present results from remote service gateway', () => {
    // Arrange
    const componentMock = {
      props: { tags: jest.fn() }
    }
    const uploadMock = {
      then: jest.fn(then => then(data()))
    }
    const useCaseMockCall = jest.fn()
    useCaseMockCall.mockReturnValue(uploadMock)
    const useCaseMock = {
      call: useCaseMockCall
    }

    const uploadPresenter = new UploadPresenter(useCaseMock, componentMock)

    // Act
    uploadPresenter.call()

    // Assert
    expect(useCaseMock.call).toHaveBeenCalled()
    expect(uploadMock.then).toHaveBeenCalled()
    expect(componentMock.props.tags).toHaveBeenCalled()
  })
})

function data() {
  return { data: { result: { tags: [{ tag: { en: 'foo'}}]} }}
}