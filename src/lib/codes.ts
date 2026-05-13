import codesData from "@/data/codes.json";

export type VerificationMethod = "redeem_test" | "official_discord" | "source_snapshot";

export interface ActiveCode {
  code: string;
  rewards: string;
  min_level: number | null;
  verified_at: string;
  verification_method: VerificationMethod;
  source_url: string | null;
  added_at: string;
  notes: string;
}

export interface ExpiredCode {
  code: string;
  rewards: string;
  last_seen_active: string;
}

export interface CodesData {
  last_checked_at: string;
  check_frequency_hours: number;
  active: ActiveCode[];
  expired: ExpiredCode[];
}

export const codes = codesData as CodesData;

export function activeCodes(): ActiveCode[] {
  return codes.active;
}

export function expiredCodes(): ExpiredCode[] {
  return codes.expired;
}

export function eligibleForLevel(userLevel: number | null, code: ActiveCode): boolean {
  if (code.min_level === null) return true;
  if (userLevel === null) return false;
  return userLevel >= code.min_level;
}

export function sortActiveCodes(
  list: ActiveCode[],
  userLevel: number | null,
): ActiveCode[] {
  const copy = [...list];
  copy.sort((a, b) => {
    if (userLevel !== null) {
      const aEl = eligibleForLevel(userLevel, a) ? 0 : 1;
      const bEl = eligibleForLevel(userLevel, b) ? 0 : 1;
      if (aEl !== bEl) return aEl - bEl;
    }
    const aMin = a.min_level ?? 0;
    const bMin = b.min_level ?? 0;
    if (aMin !== bMin) return aMin - bMin;
    return b.verified_at.localeCompare(a.verified_at);
  });
  return copy;
}
