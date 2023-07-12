import '@/assets/main.css'
//@ts-ignore

import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
import type {VueKeycloakInstance, VueKeycloakOptions} from "@dsb-norge/vue-keycloak-js/dist/types";

const keycloakOptions:VueKeycloakOptions = {
    /*пока отключен чтоб не релоадил
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
    },*/
};
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './providers/router'

const app = createApp(App)
app.use(VueKeyCloak, keycloakOptions)
app.use(createPinia())
app.use(router)
app.use(components)

app.mount('#app')
//да, конфига нормального нет, исправим, долго возился с keycloak из-за одной мелочи
//для запросов на cocktailtest acces type - public, не смог я заставить отправлять secret, да и нет его в определении
//keycloak instance
//почитал, вроде теперь разрабы говорит, что не должно требовать secret-client
//To use the JavaScript adapter you must first create a client for your application in the Keycloak Administration Console. Make sure public is selected for Access Type.