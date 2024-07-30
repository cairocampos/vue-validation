import type { HttpClient } from '@/http/http-client'
import { inject } from 'vue'

export function useApp() {
  const httpClient = inject<HttpClient>('httpClient') as HttpClient

  return { httpClient }
}
