import PreviewPresenter from '../../../app/js/lib/presenters/PreviewPresenter'
import UseCase from '../../../app/js/lib/useCases/PreviewUseCase'

describe('PreviewPresenter', () => {
  it('can update progress bar during file upload', () => {
    // Arrange
    const useCaseMock = jest.fn(() => {
      return { 
        call: jest.fn() 
      }
    })
    const thumbsCallbackMock = jest.fn()
    const stateCallbackMock = jest.fn()
    const previewPresenter = new PreviewPresenter(useCaseMock, thumbsCallbackMock, stateCallbackMock)

    // Act
    previewPresenter.call()

    // Assert
    expect(useCaseMock).toHaveBeenCalled()
    expect(thumbsCallbackMock).toHaveBeenCalled()
    expect(stateCallbackMock).toHaveBeenCalled()

    // Teardown
  });
});

