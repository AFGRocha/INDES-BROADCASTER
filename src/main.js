import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap'
import store from './store'

createApp(App).use(store).mount('#app')
