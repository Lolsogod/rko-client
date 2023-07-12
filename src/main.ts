import './assets/main.css'
//@ts-ignore

import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';
//@ts-ignore
import {isTokenReady, vueKeycloak} from "@/shared/lib/vue-keycloak/src/vue3-keycloak.js"
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
//@ts-ignore
import keycloakConfig from "./shared/api/keycloak/keycloakConfig";

const {initOptions, config} = keycloakConfig;
const pinia = createPinia();
const app = createApp(App)
app.use(vueKeycloak, {
    initOptions,
    config: {
        ...config,
        onReady: async () => {
            app
                .use(router)
                .use(pinia)
                .use(components)
            await router.isReady();
            await isTokenReady();
            app.mount('#app');
        }
    }
});
