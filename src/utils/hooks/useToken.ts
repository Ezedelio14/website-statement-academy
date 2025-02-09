import { AppKeys } from "../constants";
import { getSavedCookie } from "../sessions/cookieUtils";

export function useTokens() {
  const accessToken = getSavedCookie(AppKeys.accessToken);
  const refreshToken = getSavedCookie(AppKeys.refreshToken);

  return { accessToken, refreshToken };
}

export function getAccessToken() {
  return getSavedCookie(AppKeys.accessToken);
}
