import { createApp } from 'vue'
import Tres from '@tresjs/core'
import './style.css'
import App from './App.vue'

export const app = createApp(App)

// app.use(Tres)
app.mount('#app')
