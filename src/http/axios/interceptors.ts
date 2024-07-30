import type { AxiosError } from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

export const requestIntercept = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  if (config.headers) {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }

  return config
}

import type { AxiosResponse } from 'axios'
import type { Response } from '../http-client'

export const responseIntercept = (response: AxiosResponse) => {
  return response
}

const UNAUTHORIZED_STATUS = 401
export function handlerError(error: AxiosError): Promise<Response<any>> {
  if (error.response?.status === UNAUTHORIZED_STATUS) {
    localStorage.removeItem('token')
    const intendedPath = location.pathname + location.search
    // router.push({ path: "/login", query: { redirect: intendedPath } });
  }

  if (error.response) {
    return Promise.resolve({
      ...error.response,
      error: true
    })
  }

  return Promise.reject(error)
}
