<template>
  <div class="w-[500px] mx-auto my-80">
    <div>
      {{ result }}
    </div>

    <form @submit.prevent="send">
      <InputText name="zipcode" id="zipcode" data-testid="zipcode" />

      <button type="submit">Buscar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import InputText from './components/InputText.vue'
import { ViacepService } from './services/viacep-service'
import { useApp } from './composables/useApp'
import { ref } from 'vue'

const { httpClient } = useApp()
const viacepService = new ViacepService(httpClient)

const loginSchema = z.object({
  zipcode: z.string().length(8, 'Campo precisa ter 8 caracteres')
})

const { handleSubmit, values } = useForm({
  validationSchema: toTypedSchema(loginSchema)
})

const result = ref('')

const send = handleSubmit(async (values) => {
  const { data, error } = await viacepService.getAddress(values.zipcode)

  if (error) {
    alert('ooops')
    return
  }

  result.value = data.bairro
})
</script>

<style scoped></style>
