import { getDeepUrlDomain } from "../helpers/urls";
import { deleteCookie, getCookie, OptionsType, setCookie } from "cookies-next";

const domainFromEnv = process.env.NEXT_PUBLIC_MIRANTES_DOMAIN;
const isDev = process.env.NEXT_PUBLIC_ENV === "dev";

export function saveCookie(name: string, value: string, options?: OptionsType) {
  const deepDomain = getDeepUrlDomain(window.location.href);
  const domain = deepDomain?.includes(".vercel") ? deepDomain : domainFromEnv;

  setCookie(name, value, {
    sameSite: "lax",
    ...(isDev ? {} : { domain }),
    secure: true,
    ...options,
  });
}

export function destroyCookie(name: string, options?: OptionsType) {
  const deepDomain = getDeepUrlDomain(window.location.href);
  const domain = deepDomain?.includes(".vercel") ? deepDomain : domainFromEnv;

  deleteCookie(name, {
    sameSite: "lax",
    ...(isDev ? {} : { domain }),
    secure: true,
    ...options,
  });
}

export function getSavedCookie(name: string) {
  return getCookie(name);
}
