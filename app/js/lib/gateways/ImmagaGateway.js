export default class ImmagaGateway {
  constructor(axios) {
    this.http = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: process.env.TIMEOUT_MS,
      headers: { 'Authorization': 'Basic ' + process.env.API_TOKEN }
    });
  }

  upload(files, options) {
    return this.http.post(process.env.ENDPOINT, files.formData(), options)
  }
}