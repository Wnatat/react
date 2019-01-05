import FilesUpload from '../entities/FilesUpload'

export default class UploadUseCase {
  constructor(httpGateway, files, options) {
    this.httpGateway = httpGateway
    this.files = files
    this.options = options
  }

  call() {
    return this.upload()
  }

  upload() {
    const filesUpload = new FilesUpload(this.files)

    return this.httpGateway.upload(filesUpload, this.options)
  }
}