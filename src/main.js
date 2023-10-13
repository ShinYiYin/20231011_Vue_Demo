// import './assets/main.css'

//匯入bootstrap (原本的main.css改成scss)
import './assets/main.scss'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.mount('#app')
