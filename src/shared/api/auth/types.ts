export interface User {
    role: EROLE,
    name: string,
    preferred_username?: string,
    given_name?: string,
    family_name: string,
    email:string
}

export const enum EROLE {
    supervisor = "supervisor",
    support = "support",
    verificator = "verificator"
}

export interface AuthInstance {
    user: User | null,
}