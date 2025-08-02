import { type CarInformation } from "@shared/schema";

export interface IStorage {
  // Cache car information to avoid repeated API calls
  getCachedCarInfo(carName: string): Promise<CarInformation | undefined>;
  setCachedCarInfo(carName: string, info: CarInformation): Promise<void>;
}

export class MemStorage implements IStorage {
  private carCache: Map<string, CarInformation>;

  constructor() {
    this.carCache = new Map();
  }

  async getCachedCarInfo(carName: string): Promise<CarInformation | undefined> {
    const normalizedName = carName.toLowerCase().trim();
    return this.carCache.get(normalizedName);
  }

  async setCachedCarInfo(carName: string, info: CarInformation): Promise<void> {
    const normalizedName = carName.toLowerCase().trim();
    this.carCache.set(normalizedName, info);
  }
}

export const storage = new MemStorage();
