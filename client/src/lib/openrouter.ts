import { apiRequest } from "./queryClient";
import { type CarInformation, type CarSearchRequest } from "@shared/schema";

export async function searchCarInformation(carName: string): Promise<CarInformation> {
  const response = await apiRequest("POST", "/api/car-search", { carName });
  return response.json();
}
