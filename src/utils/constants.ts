export enum AppKeys {
  accessToken = "_accessToken",
  refreshToken = "_refreshToken",
  userData = "_userData",
  userId = "_userId",
  MIRAId = "_MIRAId",
  loggedAt = "_loggedAt",
  companyId = "_companyId",
  locale = "_locale",
  isFirstTime = "_isFirstTime",
}

export const B2CURL = process.env.NEXT_PUBLIC_B2C_URL ?? "";
export const B2B_URL = process.env.NEXT_PUBLIC_B2B_URL ?? "";
export const MCP_URL = process.env.NEXT_PUBLIC_MCP_URL ?? "";
export const MARKET_URL = process.env.NEXT_PUBLIC_MARKET_URL ?? "";
export const supportedLanguages: string[] = ["en", "fr", "pt"] as const;
