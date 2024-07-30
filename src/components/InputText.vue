<template>
  <div>
    <input v-model="value" :type class="border" v-bind="$attrs" />
    <span class="text-red-500">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

defineOptions({
  inheritAttrs: false
})

type InputTextProps = {
  name: string
  type?: 'text' | 'password' | 'email'
}

const props = withDefaults(defineProps<InputTextProps>(), {
  type: 'text'
})

const { value, errorMessage } = useField(() => props.name)
</script>

<style scoped></style>
