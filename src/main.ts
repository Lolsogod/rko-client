import './assets/main.css'
//@ts-ignore

import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';
import {isTokenReady, vueKeycloak} from "@/shared/lib/vue-keycloak/src/vue3-keycloak"
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(vueKeycloak, {
    initOptions: {
        flow: 'standard', // default
        checkLoginIframe: true, // default
        onLoad: 'login-required', // default
    },
    config: {
        url: 'https://keycloak.yamakassi.ru/auth',
        realm: 'claimapi',
        clientId: 'cocktailtest',
        onReady: async () => {
            app
                .use(router)
                .use(createPinia())
                .use(components)

            await router.isReady();
            await isTokenReady();
            console.log("before")
            app.mount('#app');
            console.log("after")

        }
    },
});
//да, конфига нормального нет, исправим, долго возился с keycloak из-за одной мелочи
//для запросов на cocktailtest acces type - public, не смог я заставить отправлять secret, да и нет его в определении
//keycloak instance
//почитал, вроде теперь разрабы говорит, что не должно требовать secret-client
//To use the JavaScript adapter you must first create a client for your application in the Keycloak Administration Console. Make sure public is selected for Access Type.