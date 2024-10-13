import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import element from 'lwt-element'
console.log(element)
createApp(App).use(element).mount('#app')
