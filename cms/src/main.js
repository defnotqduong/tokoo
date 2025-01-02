import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style.css'
import '@/assets/primevue/tailwind.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import router from '@/routes'

import '@/configs/firebaseConfig'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(PrimeVue, {
  theme: 'none'
})

app.use(ToastService)

app.mount('#app')
