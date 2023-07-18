//@ts-ignore
import Keycloak, {KeycloakConfig, KeycloakInitOptions} from "keycloak-js";
export interface Vue3KeycloakOptions {
    initOptions: KeycloakInitOptions,
    config: KeycloakConfig
}

export const keycloakConfig: Vue3KeycloakOptions = {
    initOptions: {
        flow: 'standard', // default
        checkLoginIframe: true, // default
        onLoad: 'login-required', // default
    },
    config: {
        //@ts-ignore
        url: import.meta.env.VITE_RKO_SPA_KEYCLOAK_URL,
        //@ts-ignore
        realm: import.meta.env.VITE_RKO_SPA_KEYCLOAK_REALM,
        //@ts-ignore
        clientId: import.meta.env.VITE_RKO_SPA_KEYCLOAK_CLEINTID,
    }
}
