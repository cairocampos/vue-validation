import axios, { type AxiosError } from 'axios'
import type { HttpClient, Request } from '../http-client'
import { handlerError, requestIntercept, responseIntercept } from './interceptors'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API
})

axiosInstance.interceptors.response.use(responseIntercept, handlerError)

axiosInstance.interceptors.request.use(requestIntercept, function (error: AxiosError) {
  return Promise.reject(error)
})

const axiosHttpClient: HttpClient = {
  get<T = any>(url: string, request?: Request) {
    return axiosInstance.get<T>(url, request)
  },

  post<T = any>(url: string, data: any, request?: Request) {
    return axiosInstance.post<T>(url, data, request)
  },

  put<T = any>(url: string, data: any) {
    return axiosInstance.put<T>(url, data)
  },

  delete<T = any>(url: string) {
    return axiosInstance.delete<T>(url)
  }
}

export { axiosHttpClient }
