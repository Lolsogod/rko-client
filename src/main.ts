import './assets/main.css'
//@ts-ignore
import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(components)

app.mount('#app')
