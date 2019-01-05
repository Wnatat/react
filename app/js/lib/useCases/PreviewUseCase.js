import FilesUpload from '../entities/FilesUpload'

export default class UploadUseCase {
  constructor(files) {
    this.files = files
  }

  call() {
    const filesUpload = new FilesUpload(this.files)

    return filesUpload.preview()
  }
}