import { http, HttpResponse } from 'msw'

export const getAddress = http.get<{ zipcode: string }>(
  'https://viacep.com.br/ws/:zipcode/json/',
  async ({ params }) => {
    return HttpResponse.json({
      cep: '35042-260',
      logradouro: 'Rua Trinta e Sete',
      complemento: '',
      bairro: 'Galoucura',
      localidade: 'Governador Valadares',
      uf: 'MG',
      ibge: '3127701',
      gia: '',
      ddd: '33',
      siafi: '4553'
    })
  }
)
