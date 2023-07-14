import {defineStore} from "pinia";
import {useKeycloak} from "shared/lib/vue-keycloak/src/vue3-keycloak.js";
import type {AuthInstance} from "shared/api/auth/types";
import {state} from "vue-tsc/out/shared";
import {useAuthApi} from "shared/api/auth/authApi";
let defAuthState = null;
const {getAuthState} = useAuthApi();

export const useAuthStore = defineStore('auth', {
    state: ():AuthInstance => ({
        user:null
    }),
    actions: {
        checkLoginStatus() {
            this.user = getAuthState()
        },
    },
});

