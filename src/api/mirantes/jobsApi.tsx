import axios from "axios";

export const jobsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JOBS_API_URL,
});
