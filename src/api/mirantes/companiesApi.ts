import axios from "axios";

export const companiesApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COMPANIES_API_URL,
});
