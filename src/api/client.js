import axios from "axios";

const baseURL = process.env.REACT_APP_WEATHER_DOMAIN_NAME;
const appid = process.env.REACT_APP_WEATHER_APP_ID;

export const apiClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    appid,
  },
});
