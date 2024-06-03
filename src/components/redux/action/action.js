import axios from "axios";
import { apiBasePath } from "../config/config";


export const axiosInstance = axios.create({
    baseURL: apiBasePath,
    headers: {
      "Content-Type": "application/json",
    },
  });