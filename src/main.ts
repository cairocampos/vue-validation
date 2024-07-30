import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { httpClient } from './setup'
import { enableMSW } from './services/mocks'

enableMSW().then(() => {
  const app = createApp(App)
  app.provide('httpClient', httpClient)
  app.use(createPinia())
  app.use(router)

  app.mount('#app')
})
// if (env.MODE === 'test') {
// }
