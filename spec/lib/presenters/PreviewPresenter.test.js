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
    const componentMock = {
      props: { thumbs: jest.fn() },
      setState: jest.fn()
    }
    const previewPresenter = new PreviewPresenter(useCaseMock, componentMock)

    // Act
    previewPresenter.call()

    // Assert
    expect(useCaseMock).toHaveBeenCalled()
    expect(componentMock.props.thumbs).toHaveBeenCalled()
    expect(componentMock.setState).toHaveBeenCalled()

    // Teardown
  });
});

