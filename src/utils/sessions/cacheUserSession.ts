import { AppKeys } from "../constants";
import { saveCookie } from "./cookieUtils";

export type TPostSignIn = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: {
    id: string;
    email: string;
    phone: string;
    name: string;
    miraId?: string;
  };
};

interface ICacheSession extends Omit<TPostSignIn, "tokens"> {
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
}

export function cacheUserSession({ tokens, user }: ICacheSession) {
  try {
    if (tokens) {
      saveCookie(AppKeys.accessToken, tokens.accessToken);
      saveCookie(AppKeys.refreshToken, tokens.refreshToken);
    }
    saveCookie(AppKeys.userData, JSON.stringify(user));
    saveCookie(AppKeys.userId, user?.id);
    localStorage.setItem(AppKeys.userId, user?.id);

    if (user?.miraId) saveCookie(AppKeys.MIRAId, user?.miraId);
  } catch {}
}
