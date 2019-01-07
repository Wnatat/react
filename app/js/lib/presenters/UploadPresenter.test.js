import UploadPresenter from './UploadPresenter'
import UseCase from '../useCases/UploadUseCase'

describe('UploadPresenter', () => {
  it('can present results from remote service gateway', () => {
    // Arrange
    const callbackMock = jest.fn()
    const uploadMock = {
      then: jest.fn(then => then(data()))
    }
    const useCaseMockCall = jest.fn()
    useCaseMockCall.mockReturnValue(uploadMock)
    const useCaseMock = {
      call: useCaseMockCall
    }

    const uploadPresenter = new UploadPresenter(useCaseMock, callbackMock)

    // Act
    uploadPresenter.call()

    // Assert
    expect(useCaseMock.call).toHaveBeenCalled()
    expect(uploadMock.then).toHaveBeenCalled()
    expect(callbackMock).toHaveBeenCalled()
  })
})

function data() {
  return { data: { result: { tags: [{ tag: { en: 'foo'}}]} }}
}