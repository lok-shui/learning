import axios, { AxiosInstance } from "axios";
import axiosConfig from "@/api/fetch/config";

const fetch: AxiosInstance = axios.create({
  ...axiosConfig
});

fetch.interceptors.request.use(
  async config => {
    try {
      console.log("request:", config.url);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
    return config;
  },
  error => Promise.reject(error)
);

fetch.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    return Promise.reject(error);
  }
);

export default fetch;
