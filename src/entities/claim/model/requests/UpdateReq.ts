
export interface UpdateReq {
    priority: string
    priority_reason: string
    assignee: string
    comment: string
    documents: Document[]
}