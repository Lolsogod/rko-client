export interface Status{
    id: bigint;
    updated_date: Date;
    updated_by: string;
    priority: string;
    priority_reason?: string;
    status: string;
    status_reason?: string;
    comment?: string;
  }