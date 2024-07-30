import { test, expect, vi } from 'vitest'
import { render, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import App from './App.vue'
import { fakeHttpClient } from './http/fake'
import { ViacepService } from './services/viacep-service'

test('alguma coisa', async () => {
  const serviceSpy = vi.spyOn(ViacepService.prototype, 'getAddress')
  const wrapper = render(App, {
    global: {
      provide: {
        httpClient: fakeHttpClient
      }
    }
  })

  await userEvent.type(wrapper.getByTestId('zipcode'), '35042260')

  await userEvent.click(wrapper.getByText('Buscar'))

  await waitFor(() => {
    expect(serviceSpy).toHaveBeenCalledTimes(1)
    expect(serviceSpy).toHaveBeenCalledWith('35042260')
  })
})
