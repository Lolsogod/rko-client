export interface Claim {
    category:      string;
    channel?:       string;
    initiatorType?: string;
    isFirstLine?:   boolean;
    claimType?:     any;//в проработке
    claimTheme?:    any;//в проработке
    description?:   string;
    serviceCount?:  number;
    priority?:      string;
    assignee?:      string;
    client:        Client;
    documents:     Document[];
}

export interface Client {
    globalCompanyId?: number | null;//всегда null?, уточнить про обязательность
    inn?:             string;
    kpp:             string;
    ogrn:            string;
    fullName:        string;
    shortName:       string;
}

export interface Document {
    id:   string;
    name: string;
    size: number;
}