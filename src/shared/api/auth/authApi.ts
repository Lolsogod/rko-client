import {useKeycloak} from "@/shared/lib/vue-keycloak/src/vue3-keycloak.js";

export const useAuthApi = ( )  => {
    const {keycloak, resourceRoles, decodedToken} = useKeycloak();
    const getAuthState = () => {
        let data = keycloak?.tokenParsed??null;
        if(data){
            let {email,family_name,given_name,name,preferred_username:role} = data
            return {email,family_name,given_name,name,role};
        }
        return null;
    }
    return {getAuthState}
}