// import './assets/main.css'

//匯入bootstrap (原本的main.css改成scss)
import './assets/main.scss'
import 'bootstrap'

import { createApp } from 'vue'
//手動匯入Pinia
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia)

app.mount('#app')

