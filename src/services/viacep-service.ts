import type { HttpClient } from '@/http/http-client'

export interface ViacepResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export class ViacepService {
  constructor(private readonly http: HttpClient) {}

  async getAddress(zipcode: string) {
    return this.http.get<ViacepResponse>(`https://viacep.com.br/ws/${zipcode}/json/`)
  }
}
