import FilesUpload from './FilesUpload'
import FormData from 'form-data'
import * as fs from 'fs';

describe('FilesUpload', () => {
  it('extract preview URLs from files', () => {
    // Arrange
    const file = new File([], 'foo')
    const filesUpload = new FilesUpload([file])
    global.URL.createObjectURL = jest.fn();
    global.URL.createObjectURL.mockReturnValue('foo.jpeg')

    // Act
    const preview = filesUpload.preview()[0].preview

    // Assert
    expect(preview).toEqual('foo.jpeg');

    // // Teardown
  });

  it('creates FormData object from files', () => {
    const file = fs.createReadStream(__dirname + '../../../.gititgnore')
    const filesUpload = new FilesUpload([file])

    const formData = filesUpload.formData()

    expect(formData).toBeInstanceOf(FormData)
  })

  it('can revoke a preview when component unmounts', () => {
    const file = new File([], 'foo')
    const filesUpload = new FilesUpload([file])
    global.URL.revokeObjectURL = jest.fn();

    const preview = filesUpload.revoke()

    expect(global.URL.revokeObjectURL).toHaveBeenCalledTimes(1)
  })
});

