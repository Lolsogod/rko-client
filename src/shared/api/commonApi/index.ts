import type { Claim, UpdateReq,
    CloseReq, ForwardReq,ReasignPostRequest,
    PauseReq, ClaimReq ,ClaimFilterReq, } from 'entities/claim';
import type { References } from 'entities/reference'
import api from "../index";
import type {AxiosResponse} from "axios";

//requests
export const useReferenceService = () => {
    const getReferences = async () => {
        return (await api.get<References>('/references'));
    };
    return {getReferences}

}
export const useClaimService = () => {
    const getClaims = async (claimFilterReq:ClaimFilterReq|{} = {}) => {
        return (await api.get<Claim[]>('/claims', {params : claimFilterReq}));
    };

    const getClaimById = async (id: number) => {
        try{
            return (await api.get<Claim>(`/claims/${id}`));

        }catch (e){
            throw e;
        }
    };

    const createClaim = async (claim: ClaimReq) :Promise<Claim>=> {
        try{
            return await api.post('/claims', claim);
        }catch (e){
            throw e;
        }
    };

    const editClaim = async (claim: ClaimReq, id: number) :Promise<Claim>=> {
        return await api.post(`/claims/${id}`, claim)
    };

    const updateClaim = async (req: UpdateReq, id: number) => {
        return await api.patch(`/claims/${id}/update`, req)
    };

    const assign = async (id: number) => {
        return await api.patch<Claim>(`/claims/${id}/assign`)
    };
//
    const forward = async (req: ForwardReq, id: number) => {
        return (await api.patch<Claim>(`/claims/${id}/forward`, req))
    };

    const close = async (req: CloseReq, id: number) => {
        return (await api.patch<Claim>(`/claims/${id}/close`, req));
    };
    const pause = async (req: PauseReq, id: number) => {
        return (await api.patch<Claim>(`/claims/${id}/pause`, req));
    };
    const reassign = async (req: ReasignPostRequest, id: number) => {
        return (await api.patch<Claim>(`/claims/${id}/reassign`, req));
    };
    return {pause,close,createClaim,forward,assign, updateClaim, editClaim,  getClaimById,getClaims, reassign}


}