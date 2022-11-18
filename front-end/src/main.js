import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
import { createApp  } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.css'

//change langue html default
const html = document.documentElement
html.setAttribute('lang', 'fr')


// Lie l'élément personnalisé IonPhaser à l'objet windows
defineIonPhaser(window);

const app = createApp(App)
app.use(router)
app.use(store)
app.config.productionTip = false;
app.config.ignoredElements = [/ion-\w*/];
app.mount('#app')
