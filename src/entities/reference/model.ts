export interface References {
  categories:     ReferenceData[];
  channels:       ReferenceData[];
  initiatorTypes: ReferenceData[];
  divisions:      ReferenceData[];
  priority:       ReferenceData[];
  statuses:       ReferenceData[];
  claimTypes:     ReferenceData[];
  claimThemes:    ReferenceData[];
}
  
export interface ReferenceData {
    code: string
    text: string
    reasons?: ReferenceData[]
}