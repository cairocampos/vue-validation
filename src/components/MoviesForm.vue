<template>
  <div>
    <div v-for="(field, index) in fields" :key="field.key">
      <label for="title">Titulo</label>
      <InputText :name="`movies[${index}].title`" />

      <label for="rating">Rating</label>
      <InputText :name="`movies[${index}].rating`" />
    </div>

    <button type="button" @click="append">Adicionar</button>
  </div>
</template>

<script setup lang="ts">
import { useFieldArray } from 'vee-validate'
import InputText from './InputText.vue'

const { remove, push, fields } = useFieldArray('movies')

function append() {
  push({
    title: '',
    rating: ''
  })
}
</script>

<style scoped></style>
