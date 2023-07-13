import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './providers'
import App from './index.vue'

//@ts-ignore библиотека рови, без игнора не импортится
import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';

import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
import type { VueKeycloakOptions} from "@dsb-norge/vue-keycloak-js/dist/types";

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


const app = createApp(App)
            .use(VueKeyCloak, keycloakOptions)
            .use(createPinia())
            .use(router)
            .use(components)
/*
    да, конфига нормального нет, исправим, долго возился с keycloak из-за одной мелочи
    для запросов на cocktailtest acces type - public, не смог я заставить отправлять secret, да и нет его в определении
    keycloak instance
    почитал, вроде теперь разрабы говорит, что не должно требовать secret-client
    To use the JavaScript adapter you must first create a client for your application in the Keycloak Administration Console. Make sure public is selected for Access Type.
*/

export { app }