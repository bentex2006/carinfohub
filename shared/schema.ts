import { z } from "zod";

export const carSearchSchema = z.object({
  carName: z.string().min(1, "Car name is required").max(100, "Car name too long"),
});

export const carPricingSchema = z.object({
  usa: z.string(),
  china: z.string(), 
  india: z.string(),
  dubai: z.string(),
});

export const carSpecsSchema = z.object({
  engine: z.string(),
  power: z.string(),
  torque: z.string(),
  topSpeed: z.string(),
  acceleration: z.string(),
  drive: z.string(),
  range: z.string(),
  consumption: z.string(),
  emissions: z.string(),
  charging: z.string(),
  battery: z.string(),
});

export const carManufacturingSchema = z.object({
  manufacturer: z.string(),
  chipPartner: z.string().optional(),
  batteryPartner: z.string().optional(),
  locations: z.array(z.string()),
});

export const carInformationSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  imageUrl: z.string().optional(),
  history: z.string(),
  achievements: z.array(z.string()),
  keyMilestones: z.array(z.string()),
  innovationAwards: z.array(z.string()),
  specs: carSpecsSchema,
  pricing: carPricingSchema,
  manufacturing: carManufacturingSchema,
  competitors: z.array(z.object({
    name: z.string(),
    price: z.string(),
  })),
  ratings: z.object({
    overall: z.number(),
    performance: z.number(),
    technology: z.number(),
    value: z.number(),
  }),
});

export type CarSearchRequest = z.infer<typeof carSearchSchema>;
export type CarInformation = z.infer<typeof carInformationSchema>;
export type CarPricing = z.infer<typeof carPricingSchema>;
export type CarSpecs = z.infer<typeof carSpecsSchema>;
export type CarManufacturing = z.infer<typeof carManufacturingSchema>;
