import axios from 'axios'

import type { Claim, UpdateReq,
    CloseReq, ForwardReq,
    PauseReq, CreateReq } from '../../../entities/claim';
import type { References } from '../../../entities/reference'
import api from "../index";

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
        return await api.post('/claim', claim)
    };

    const editClaim = async (claim: Claim, id: number)=> {
        return await api.post(`/claim/${id}`, claim)
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
