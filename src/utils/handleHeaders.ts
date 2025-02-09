import { InternalAxiosRequestConfig } from "axios";
import { getSavedCookie } from "./sessions/cookieUtils";
import { getAccessToken } from "./hooks/useToken";

export function handleHeadersConfig(
  config: InternalAxiosRequestConfig<any>,
  callback?: typeof handleHeadersConfig
): InternalAxiosRequestConfig<any> {
  const accessToken = getAccessToken();
  const lang = getSavedCookie("language");

  if (accessToken && config?.headers && !config.headers["x-access-token"]) {
    config.headers["x-access-token"] = accessToken;
    config.headers["x-origin"] = "b2c";
    config.headers["x-lang"] = lang;
  }

  if (callback) return callback(config);

  return config;
}
