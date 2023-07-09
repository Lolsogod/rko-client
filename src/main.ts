import './assets/main.css'
//@ts-ignore
import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
import App from './App.vue'
import router from './router'
import type {VueKeycloakInstance} from "@dsb-norge/vue-keycloak-js/dist/types";

const keycloakOptions = {
    config: {
        url: 'http://keycloak.yamakassi.ru/auth',
        realm: 'claimapi',
        clientId: 'cocktail',

    },
    initOptions: {
        // redirectUri:"http://localhost:5173/",
        onLoad: 'login-required',
        clientId: 'cocktail',
        // clientSecret: 'yP0hhCKnmtYrczj6eIuIKtvvO51pwbNaG', // Replace with your actual client secret
        // username: 'usersupervisor', // Replace with your actual username
        // password: '1234', // Replace with your actual password
    },
};
const app = createApp(App).use(VueKeyCloak, keycloakOptions)
app.use(createPinia())
app.use(router)
app.use(components)
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties  {
        $keycloak: VueKeycloakInstance
    }
}

app.mount('#app')