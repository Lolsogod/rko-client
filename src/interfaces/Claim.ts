// нормальный клейм(надеюсь)
export interface Claim {
    id: number;
    created_date: string;
    updated_date: string;
    created_by: string;
    updated_by: string;
    assignee?: string;
    status: string;
    status_reason: string;
    pause_till?: string;
    category: string;
    channel?: string;
    initiator_type?: string;
    is_first_line?: boolean;
    claim_type?: string;
    claim_theme?: string;
    service_count?: number;
    priority?: string;
    priority_reason?: string;
    description?: string;
    comment?: string;
    client?: Client;
    documents: Document[];
    status_history: Status[]
  }
  
  export interface Client {
    id: bigint;
    global_company_id?: bigint;
    inn: string;
    kpp?: string;
    ogrn: string;
    full_name: string;
    short_name: string;
  }
  
  export interface Document {
    id: string;
    name: string;
    size: bigint;
  }

  export interface Status{
    id: bigint;
    updated_date: Date;
    updated_by: string;
    priority: string;
    priority_reason?: string;
    status: string;
    status_reason?: bigint;
    comment?: string;
  }