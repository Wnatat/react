import RevokeUseCase from './RevokeUseCase'
import * as fs from 'fs';

describe('RevokeUseCase', () => {
  it('can generate a preview url for files', () => {
    // Arrange
    global.URL.revokeObjectURL = jest.fn();
    global.URL.revokeObjectURL.mockReturnValue('foo.jpeg')
    const file = fs.createReadStream(__dirname + '/../../../images/test.jpg')
    const revokeUseCase = new RevokeUseCase([file])

    // Act
    const preview = revokeUseCase.call()

    // Assert
    expect(global.URL.revokeObjectURL).toHaveBeenCalledTimes(1)
  })
})