export interface Client {
    id: bigint;
    globalCompanyId?: bigint;
    inn: string;
    kpp?: string;
    ogrn: string;
    fullName: string;
    shortName: string;
}