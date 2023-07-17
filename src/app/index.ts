//@ts-ignore
import components from '@factoringplus/pl-components-pack-v3';
import '@factoringplus/pl-components-pack-v3/dist/style.css';

import { vueKeycloak} from "shared/lib/vue-keycloak/src/vue3-keycloak.js"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './providers'
import App from './index.vue'
//@ts-ignore
import keycloakConfig from "shared/api/keycloak/keycloakConfig";

const {initOptions, config} = keycloakConfig;
const pinia = createPinia();
const app = createApp(App)
/*app.use(vueKeycloak,{ 
    initOptions,
    config: {
        ...config,
        onReady: () => {
            app.use(router)
               .use(pinia)
               .use(components)
               .mount('#app')
            }
        }
    }
)*/

app.use(router)
    .use(pinia)
    .use(components)
    .mount('#app') 
