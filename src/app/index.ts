//@ts-ignore 
import components from '@factoringplus/pl-components-pack-v3'
import '@factoringplus/pl-components-pack-v3/dist/style.css'

import { createApp } from 'vue'
//@ts-ignore
import { vueKeycloak } from "shared/lib/vue-keycloak"
import { createPinia } from 'pinia'
import { router } from './providers'
import App from './index.vue'

import { keycloakConfig } from "./providers";

const {initOptions, config} = keycloakConfig;
const pinia = createPinia();
const app = createApp(App)
app.use(pinia)
// кейклок медленный и кривой, пока отключил
app.use(vueKeycloak,{
    initOptions,
    config: {
        ...config,
        onReady: () => {
            app.use(router)
               .use(components)
               .mount('#app')
            }
        }
    }
)
app.use(pinia)

/*
app.use(router)
    .use(pinia)
    .use(components)
    .mount('#app')*/