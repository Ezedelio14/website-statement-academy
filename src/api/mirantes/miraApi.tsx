import axios from "axios";

export const miraApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MIRA_API_URL,
});
