

import type { Document } from "entities/document"
import type { Client } from "entities/client/model";
import type { Status } from "entities/status-history/model";

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
