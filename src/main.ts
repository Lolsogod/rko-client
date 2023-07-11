import './assets/main.css'
//@ts-ignore

import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';
import {isTokenReady, vueKeycloak} from "@/shared/lib/vue-keycloak/src/vue3-keycloak.js"
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import keycloakConfig from "../public/keycloakConfig";
import * as process from "process";

const {initOptions, config} = keycloakConfig;
const app = createApp(App)
app.use(vueKeycloak, {
    initOptions,
    config: {
        ...config,
        onReady: async () => {
            app
                .use(router)
                .use(createPinia())
                .use(components)
            await router.isReady();
            await isTokenReady();
            app.mount('#app');
        }
    }
});
