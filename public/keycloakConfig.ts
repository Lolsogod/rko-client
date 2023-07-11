import Keycloak, {KeycloakConfig, KeycloakInitOptions} from "keycloak-js";
import * as process from "process";

export interface Vue3KeycloakOptions {
    initOptions: KeycloakInitOptions,
    config: KeycloakConfig & Keycloak
}

const keycloakConfig: Vue3KeycloakOptions = {
    initOptions: {
        flow: 'standard', // default
        checkLoginIframe: true, // default
        onLoad: 'login-required', // default
    },
    config: {
        url: import.meta.env.VITE_RKO_SPA_KEYCLOAK_URL,
        realm: import.meta.env.VITE_RKO_SPA_KEYCLOAK_REALM,
        clientId: import.meta.env.VITE_RKO_SPA_KEYCLOAK_CLEINTID,
    }
}
export default keycloakConfig