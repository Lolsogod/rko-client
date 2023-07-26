import type {CategoriesEnum} from "../enum";
import {ChannelsEnum, ClaimThemesEnum, ClaimTypesEnum, InitiatorTypeEnum} from "../enum";

export interface CreateReq {
    category: CategoriesEnum
    channel: ChannelsEnum
    initiatorType: InitiatorTypeEnum
    isFirstLine: boolean
    claimType: ClaimTypesEnum
    claimTheme: ClaimThemesEnum
    description: string
    serviceCount: number
    priority: string
    priority_reason: string
    assignee: string
    comment: string
    client: CRClient
    documents: CRDocument[]
}

export interface CRClient {
    globalCompanyId: number
    plCompanyId: string
    inn: string
    kpp: string
    ogrn: string
    fullName: string
    shortName: string
}

export interface CRDocument {
    id: string
    name: string
    size: number
}