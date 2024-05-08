import { axios } from "./utils/axios.ts";

const path = "user";

export const login = async (data) => {
  return await axios.post(`/${path}/login`, data);
};

export const signup = async (data) => {
  return await axios.post(`/${path}/signup`, data);
};
