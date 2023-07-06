export interface References {
    categories:     Category[];
    channels:       Category[];
    initiatorTypes: Category[];
    priority:       Category[];
    claimTypes?:     any[];//в проработке
    claimThemes?:    any[];//в проработке
}

export interface Category {
    code: string;
    text: string;
}