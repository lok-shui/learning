import { AxiosPromise } from "axios";
import fetch from "@/api/fetch";

const getList = (params: any): AxiosPromise =>
  fetch.get("/v1/api/question/list", { params });

const getDetail = (params: any): AxiosPromise =>
  fetch.get("/v1/api/question/web_data", { params });

export default {
  getList,
  getDetail
};
