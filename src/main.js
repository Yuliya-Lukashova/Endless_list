import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueVirtualScroller from 'vue-virtual-scroller'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueVirtualScroller)
app.mount('#app')
