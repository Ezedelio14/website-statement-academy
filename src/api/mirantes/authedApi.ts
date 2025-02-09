import { handleHeadersConfig } from "@/utils/handleHeaders";
import axios from "axios";

export const authedApiMs = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTHENTICATION_API_URL,
});

authedApiMs.interceptors.request.use(handleHeadersConfig);
