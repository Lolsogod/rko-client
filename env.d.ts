import Keycloak from "keycloak-js";

declare module '@/shared/lib/vue-keycloak/src/vue3-keycloak.js' {
    export function isTokenReady(): Promise<void>;
    export function vueKeycloak(app: any, options: any): void;
    export function getKeycloak():Keycloak
    export function getToken():string
    export function updateToken():string
    export function useKeycloak():{
        isAuthenticated:boolean,
        isPending:boolean,
        hasFailed:any,
        token:string,
        decodedToken:string,
        username:string,
        roles:Array<string>,
        resourceRoles:any,
        keycloak:Keycloak,
        // Functions
        hasRoles:Function,
        hasResourceRoles:Function,
    }
}