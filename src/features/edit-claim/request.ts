import type { CRClient, Claim, ClaimReq } from "entities/claim";

export const claimtoReq = (claim: Claim): ClaimReq => {
    const crClient: CRClient = {
      globalCompanyId: claim.client?.global_company_id ? Number(claim.client.global_company_id) : 0,
      plCompanyId: claim.client?.id.toString() || '',
      inn: claim.client?.inn || '',
      kpp: claim.client?.kpp || '',
      ogrn: claim.client?.ogrn || '',
      fullName: claim.client?.full_name || '',
      shortName: claim.client?.short_name || '',
    };
  
    const nonEmptyProps: Partial<ClaimReq> = {
      category: claim.category,
      channel: claim.channel,
      initiatorType: claim.initiator_type,
      isFirstLine: claim.is_first_line,
      claimType: claim.claim_type,
      claimTheme: claim.claim_theme,
      description: claim.description,
      serviceCount: claim.service_count,
      priority: claim.priority,
      priority_reason: claim.priority_reason,
      assignee: claim.assignee,
      comment: claim.comment,
      client: crClient,
      documents: claim.documents,
    };
  
    const claimReq: ClaimReq = Object.fromEntries(
      Object.entries(nonEmptyProps).filter(([_, value]) => value !== undefined && value !== null)
    ) as unknown as ClaimReq;
    return claimReq;
}