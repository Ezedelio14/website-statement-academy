import axios from "axios";

const courseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COURSE_API_URL,
});

export default courseApi;
