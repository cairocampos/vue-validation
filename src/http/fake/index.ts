import type { HttpClient, Response } from '../http-client'

const fakeResponse: Response<any> = {
  data: {
    message: 'Hello World'
  }
}

export const fakeHttpClient: HttpClient = {
  get() {
    return Promise.resolve(fakeResponse)
  },
  post() {
    return Promise.resolve(fakeResponse)
  },
  put() {
    return Promise.resolve(fakeResponse)
  },
  delete() {
    return Promise.resolve(fakeResponse)
  }
}
