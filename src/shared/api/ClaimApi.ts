import type {Claim} from '@/interfaces/Claim';
import type {References} from '@/interfaces/References'
import type {UpdateReq} from '@/interfaces/requests/UpdateReq';
import type {ForwardReq} from '@/interfaces/requests/ForwardReq'
import axios from 'axios'
import type {CloseReq} from '@/interfaces/requests/CloseReq';
import type {PauseReq} from '@/interfaces/requests/PauseReq';
import {updateToken, useKeycloak} from "@/shared/lib/vue-keycloak/src/vue3-keycloak.js";

const api = axios.create({
    baseURL: "http://localhost:3000" //из енва потом брать
})

api.interceptors.response.use(
    response => {
        //response.headers.Authorization =  "later"; подумать когда авториззация будет
        return response;
    }, error => {
        if (error.response.status === 404) {
            return {status: error.response.status};
        }
        return Promise.reject(error.response);
    });
api.interceptors.request.use(
    async (config:any) => {
        const {keycloak, hasFailed, isPending} = useKeycloak();
        let token = null;
        try {
            token = await updateToken(0); // updates token if expired, by default returns the token if it valid
        } catch (error) {
            error && console.error("ошибка токена"); // some custom error handler

            if (hasFailed && !isPending) {
                keycloak.logout();
            }
        }
        config.headers = {
            Authorization: bearerAuth(token), // for example
        };
        return config;
    }, error => {
        Promise.reject(error);
    });
function bearerAuth(token: string) {
    return `Bearer ${token}`
}

//requests
//работают на фейк бэке
export const getReferences = async () => {
    return (await api.get<References>('/references')).data
}
//фильтры доделать
export const getClaims = async () => {
    return (await api.get<Claim[]>('/claim')).data
}


//не тестил
export const getClaimById = async (id: number) => {
    return (await api.get<Claim>(`/claim/${id}`)).data
}

export const createClaim = async (claim: Claim) => {
    return await api.post('/claim', {...claim})
}

export const editClaim = async (claim: Claim, id: number) => {
    return await api.post(`/claim/${id}`, {...claim})
}

export const updateClaim = async (req: UpdateReq, id: number) => {
    return await api.patch(`/claim/${id}/update`, {...req})
}

export const assign = async (id: number) => {
    return await api.patch(`/claims/${id}/assign`)
}

export const forward = async (req: ForwardReq, id: number) => {
    return await api.patch(`/claims/${id}/forward`, {...req})
}

export const close = async (req: CloseReq, id: number) => {
    return await api.patch(`/claims/${id}/close`, {...req})
}

export const pause = async (req: PauseReq, id: number) => {
    return await api.patch(`/claims/${id}/pause`, {...req})
}