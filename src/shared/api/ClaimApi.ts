import type { Claim } from '@/interfaces/Claim';
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

export const getReferences = async () => {
    return await api.get('/references')
}

export const createClaim = async (claim: Claim) => {
    return await api.post('/claim', {...claim})
}

export const assign = async () => {
    return await api.put('/references')
}

export const unassign = async () => {
    return await api.put('/references')
}
