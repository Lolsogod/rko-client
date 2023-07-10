import type { Claim } from '@/interfaces/Claim';
import type { References } from '@/interfaces/References'
import type { UpdateReq } from '@/interfaces/UpdateReq';
import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000" //из енва потом брать
})

api.interceptors.response.use(response => {
        //response.headers.Authorization =  "later"; подумать года авториззация будет
        return response;
    }, error => {
        if (error.response.status === 404) {
            return { status: error.response.status };
        }
        return Promise.reject(error.response);
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