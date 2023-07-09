import './assets/main.css'
//@ts-ignore

import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
import type {VueKeycloakInstance, VueKeycloakOptions} from "@dsb-norge/vue-keycloak-js/dist/types";

const keycloakOptions:VueKeycloakOptions = {
    config: {
        url: 'https://keycloak.yamakassi.ru/auth',
        realm: 'claimapi',
        clientId: 'cocktailtest',

    },
    init: {
        redirectUri:"http://localhost:5173/",
        onLoad: 'login-required',

        pkceMethod:'S256'// Replace with your actual client secret
        // username: 'usersupervisor', // Replace with your actual username
        // password: '1234', // Replace with your actual password
    },
};
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueKeyCloak, keycloakOptions)
app.use(createPinia())
app.use(router)
app.use(components)

app.mount('#app')
