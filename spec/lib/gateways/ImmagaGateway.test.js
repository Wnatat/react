import ImmagaGateway from '../../../app/js/lib/gateways/ImmagaGateway'
import FilesUpload from '../../../app/js/lib/entities/FilesUpload'
import axios from 'axios'
import * as fs from 'fs';
import FormData from 'form-data'

jest.mock('axios');

describe('ImmagaGateway', () => {
  it('can send image file to remote service', () => {
    // Arrange
    const axiosMock = axios
    axiosMock.create = jest.fn()
    axiosMock.create.mockReturnValue(axiosMock)
    const resp = {data: [{name: 'Bob'}]}
    axiosMock.post.mockResolvedValue(resp)
    const immagaGateway = new ImmagaGateway(axios)
    const file = fs.createReadStream(__dirname + '../../../.gititgnore')
    const filesUpload = new FilesUpload([file])

    // Act
    immagaGateway.upload(filesUpload, [])

    // Assert
    expect(axios.create).toHaveBeenCalled()
    expect(axios.post).toHaveBeenCalled()
    expect(axios.post.mock.calls[0][0]).toEqual('/image/tags')
    expect(axios.post.mock.calls[0][1]).toBeInstanceOf(FormData)
    expect(axios.post.mock.calls[0][2]).toEqual([])
    return immagaGateway.upload(filesUpload, [])
      .then(res => expect(res).toEqual(resp));
  })
})