import axios, {AxiosResponse} from 'axios'

import type { Claim, UpdateReq,
    CloseReq, ForwardReq,
    PauseReq, CreateReq } from '../../../entities/claim';
import type { References } from '../../../entities/reference'
//@ts-ignore
import {updateToken, useKeycloak} from "shared/lib/vue-keycloak/src/vue3-keycloak.js";

const api = axios.create({
    //@ts-ignore
    baseURL: import.meta.env.VITE_RKO_SPA_REAL_API_URL
});

api.interceptors.response.use(
    response => {
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
            token = await updateToken(0);
        } catch (error:any) {
            error && console.error(error?.response.status||error);

            if (hasFailed && !isPending) {
                keycloak.logout();
            }
        }
        config.headers = {
            Authorization: bearerAuth(token),
        };
        return config;
    }, error => {
        console.error("axios bearer requst error")
        console.log(error?.response)
        Promise.reject(error);
    });
function bearerAuth(token: string | null) {
    return `Bearer ${token}`
};
export const useCommonApi = () => {
    const getReferences = async () => {
        return (await api.get<References>('/references'))
    };

    const getClaims = async () => {
        return (await api.get<Claim[]>('/claims'))
    };

    const getClaimById = async (id: number) => {
        return (await api.get<Claim>(`/claim/${id}`))
    };

    const createClaim = async (claim: CreateReq) => {
        return await api.post('/claim', {...claim})
    };

    const editClaim = async (claim: Claim, id: number):Promise<any> => {
        return await api.post(`/claim/${id}`, {...claim})
    };

    const updateClaim = async (req: UpdateReq, id: number) => {
        return await api.patch(`/claim/${id}/update`, {...req})
    };

    const assign = async (id: number) => {
        return await api.patch(`/claims/${id}/assign`)
    };

    const forward = async (req: ForwardReq, id: number) => {
        return await api.patch(`/claims/${id}/forward`, {...req})
    };

    const close = async (req: CloseReq, id: number) => {
        return await api.patch(`/claims/${id}/close`, {...req})
    };

    const pause = async (req: PauseReq, id: number) => {
        return await api.patch(`/claims/${id}/pause`, {...req})
    };
    return {pause,close,createClaim,forward,assign, updateClaim, editClaim,  getClaimById,getClaims, getReferences}
}
//requests
