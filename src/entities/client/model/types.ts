export interface Client {
    id: bigint;
    global_company_id?: bigint;
    inn: string;
    kpp?: string;
    ogrn: string;
    full_name: string;
    short_name: string;
}