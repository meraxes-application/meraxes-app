import axios from "axios";

const token = import.meta.env.VITE_MERAXES_SERVER_TOKEN;
const baseUrl = import.meta.env.VITE_MERAXES_SERVER_BASE_URL;

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
