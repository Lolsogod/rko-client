export interface CreateReq {
    category: CategoriesEnum
    channel: string
    initiatorType: string
    isFirstLine: boolean
    claimType: string
    claimTheme: string
    description: string
    serviceCount: number
    priority: string
    priority_reason: string
    assignee: string
    comment: string
    client: CRClient
    documents: CRDocument[]
  }
  export enum CategoriesEnum{
      INCOMING="Входящие",
      OUTGOING="Исходящее",
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