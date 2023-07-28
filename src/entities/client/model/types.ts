export interface Client {
    id: number;
    globalCompanyId?: number;
    inn: string;
    kpp?: string;
    ogrn: string;
    fullName: string;
    shortName: string;
}