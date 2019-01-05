import FormData from 'form-data'

export default class FilesUpload {
  constructor(files) {
    this.files = files
  }

  preview() {
    return this.files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
  }

  formData() {
    const formData = new FormData()

    formData.append("image", this.files[0])

    return formData
  }

  revoke() {
    this.files.forEach(file => URL.revokeObjectURL(file.preview))
  }
}