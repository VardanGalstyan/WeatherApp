import { apiClient } from "./client";

export function getForeCaseData(query) {
  return apiClient.get(`forecast?q=${query}`);
}
