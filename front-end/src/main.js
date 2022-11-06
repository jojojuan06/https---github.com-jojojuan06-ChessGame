import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.css'

//change langue html default
const html = document.documentElement
html.setAttribute('lang', 'fr')

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
