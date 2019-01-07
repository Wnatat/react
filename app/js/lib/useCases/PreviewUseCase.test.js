import PreviewUseCase from './PreviewUseCase'
import * as fs from 'fs';

describe('PreviewUseCase', () => {
  it('can generate a preview url for files', () => {
    // Arrange
    global.URL.createObjectURL = jest.fn();
    global.URL.createObjectURL.mockReturnValue('foo.jpeg')
    const file = fs.createReadStream(__dirname + '/../../../images/test.jpg')
    const previewUseCase = new PreviewUseCase([file])

    // Act
    const preview = previewUseCase.call()

    // Assert
    expect(preview[0].preview).toEqual('foo.jpeg')
  })
})