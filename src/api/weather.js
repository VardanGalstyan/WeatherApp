import { apiClient } from "./client";

export function getWeatherData(query) {
  return apiClient.get(`weather?q=${query}`);
}
