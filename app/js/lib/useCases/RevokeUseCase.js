import FilesUpload from '../entities/FilesUpload'

export default class RevokeUseCase {
  constructor(files) {
    this.files = files
  }

  call() {
    const filesUpload = new FilesUpload(this.files)

    return filesUpload.revoke()
  }
}