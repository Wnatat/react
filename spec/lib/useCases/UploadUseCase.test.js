import UploadUseCase from '../../../app/js/lib/useCases/UploadUseCase'
import FilesUpload from '../../../app/js/lib/entities/FilesUpload'
import * as fs from 'fs';

describe('UploadUseCase', () => {
  it('can use gateway to communicate with remote service', () => {
    // Arrange
    const gatewayMock = {
      upload: jest.fn()
    }
    gatewayMock.upload.mockReturnValue()
    const file = fs.createReadStream(__dirname + '/../../../app/images/test.jpg')
    const uploadUseCase = new UploadUseCase(gatewayMock, [file], [])

    // Act
    uploadUseCase.call()

    // Assert
    expect(gatewayMock.upload).toHaveBeenCalled()
    expect(gatewayMock.upload.mock.calls[0][0]).toBeInstanceOf(FilesUpload)
    expect(gatewayMock.upload.mock.calls[0][1]).toEqual([])
  })
})