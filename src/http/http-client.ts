export type Response<T> = {
  message?: string
  status?: number
  data: T
  statusText?: string
  headers?: any
  config?: any
  request?: any
  error?: boolean
}

export type Request = {
  params?: any
  headers?: any
}

export interface HttpClient {
  get<T = any>(url: string, request?: Request): Promise<Response<T>>
  post<T = any>(url: string, data: any, request?: Request): Promise<Response<T>>
  put<T = any>(url: string, data: any): Promise<Response<T>>
  delete<T = any>(url: string): Promise<Response<T>>
}
