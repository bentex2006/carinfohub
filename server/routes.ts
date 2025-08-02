import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { carSearchSchema, carInformationSchema, type CarInformation } from "@shared/schema";
import { z } from "zod";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "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";
const MODEL_ID = "deepseek/deepseek-chat-v3-0324:free";

async function getCarInformationFromAI(carName: string): Promise<CarInformation> {
  const prompt = `You are a professional automotive research expert. Analyze this query: "${carName}"

VALIDATION: If the query is NOT a car model, automotive vehicle, or car brand, respond with: {"error": "Please enter a valid car model name. This service provides automotive information only."}

For valid automotive queries:
- If only a brand name is provided (like "BMW"), suggest and provide information for a popular model from that brand
- If the model is unclear, find the closest matching vehicle or suggest a popular model from that brand
- Always provide complete automotive information

For the car information, please provide comprehensive details in the following JSON format:

{
  "name": "Full car name and model",
  "tagline": "Brief marketing tagline or description",
  "imageUrl": "https://images.unsplash.com/relevant-car-image-url",
  "history": "Detailed paragraph about the car's history, development, and significance",
  "achievements": ["Achievement 1", "Achievement 2", "Achievement 3"],
  "keyMilestones": ["Milestone 1", "Milestone 2", "Milestone 3"],
  "innovationAwards": ["Award 1", "Award 2", "Award 3"],
  "specs": {
    "engine": "Engine type and configuration",
    "power": "Maximum power output",
    "torque": "Maximum torque",
    "topSpeed": "Top speed",
    "acceleration": "0-60 mph time",
    "drive": "Drive type (FWD/RWD/AWD)",
    "range": "Driving range (for electric) or fuel economy",
    "consumption": "Energy consumption or MPG",
    "emissions": "CO2 emissions",
    "charging": "Charging time (for electric)",
    "battery": "Battery capacity (for electric)"
  },
  "pricing": {
    "usa": "Price in USD with currency symbol",
    "china": "Price in CNY with currency symbol",
    "india": "Price in INR with currency symbol",
    "dubai": "Price in AED with currency symbol"
  },
  "manufacturing": {
    "manufacturer": "Primary manufacturer",
    "chipPartner": "Technology/chip partner if applicable",
    "batteryPartner": "Battery technology partner if applicable",
    "locations": ["Location 1", "Location 2", "Location 3", "Location 4"]
  },
  "competitors": [
    {"name": "Competitor 1", "price": "Price"},
    {"name": "Competitor 2", "price": "Price"},
    {"name": "Competitor 3", "price": "Price"},
    {"name": "Competitor 4", "price": "Price"}
  ],
  "ratings": {
    "overall": 4.8,
    "performance": 9.5,
    "technology": 9.2,
    "value": 7.8
  }
}

Critical Requirements:
- For imageUrl: Provide a complete, direct, high-quality image URL of the specific car model. Use full URLs like "https://images.unsplash.com/photo-[specific-id]?w=1200&q=80" or from official manufacturer websites or automotive media
- Provide only accurate, real automotive information
- Ratings: realistic numbers (overall out of 5, others out of 10)

CRITICAL: Respond ONLY with the raw JSON object. Do NOT wrap it in markdown code blocks or add any other text. Return pure JSON only.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://ai-car-hub.com',
        'X-Title': 'AI Car Information Hub'
      },
      body: JSON.stringify({
        model: MODEL_ID,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    try {
      // Clean up the response - remove markdown code blocks if present
      let cleanedContent = content.trim();
      if (cleanedContent.startsWith('```json')) {
        cleanedContent = cleanedContent.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanedContent.startsWith('```')) {
        cleanedContent = cleanedContent.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }
      
      const rawData = JSON.parse(cleanedContent);
      
      // Check if the response contains an error field
      if (rawData.error) {
        throw new Error(rawData.error);
      }
      
      return carInformationSchema.parse(rawData);
    } catch (parseError) {
      console.error('AI Response parsing error:', parseError);
      console.error('Raw AI response:', content);
      
      // If it's a validation error, provide a fallback response
      if (parseError instanceof Error && parseError.name === 'ZodError') {
        // Create a fallback response for demonstration purposes
        const fallbackResponse: CarInformation = {
          name: `${carName} (Demo Data)`,
          tagline: "AI-generated car information unavailable - showing demo format",
          imageUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
          history: `The ${carName} represents modern automotive engineering. This is a demonstration of the car information format when specific data is not available from our AI service.`,
          achievements: [
            "Award-winning design",
            "Advanced safety features",
            "Environmental certification"
          ],
          keyMilestones: [
            "2020: Initial concept development",
            "2022: Production launch",
            "2024: Latest generation release"
          ],
          innovationAwards: [
            "Best Design Award 2023",
            "Innovation Excellence 2024",
            "Technology Leadership Award"
          ],
          specs: {
            engine: "Advanced powertrain",
            power: "High-performance output",
            torque: "Optimal torque delivery",
            topSpeed: "Impressive top speed",
            acceleration: "Quick acceleration",
            drive: "All-wheel drive",
            range: "Extended range",
            consumption: "Efficient consumption",
            emissions: "Low emissions",
            charging: "Fast charging capability",
            battery: "Advanced battery technology"
          },
          pricing: {
            usa: "$45,000 - $65,000",
            china: "¥320,000 - ¥450,000",
            india: "₹3,500,000 - ₹5,000,000",
            dubai: "AED 165,000 - AED 240,000"
          },
          manufacturing: {
            manufacturer: "Global Automotive",
            chipPartner: "Advanced Tech Solutions",
            batteryPartner: "Energy Systems Corp",
            locations: ["USA", "Germany", "China", "Japan"]
          },
          competitors: [
            { name: "Competitor Model A", price: "$42,000" },
            { name: "Competitor Model B", price: "$48,000" },
            { name: "Competitor Model C", price: "$52,000" },
            { name: "Competitor Model D", price: "$58,000" }
          ],
          ratings: {
            overall: 4.2,
            performance: 8.5,
            technology: 8.8,
            value: 7.9
          }
        };
        return fallbackResponse;
      }
      
      throw new Error(`Failed to parse AI response: ${parseError}`);
    }
  } catch (error) {
    throw new Error(`Failed to get car information: ${error}`);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.post("/api/car-search", async (req, res) => {
    try {
      const { carName } = carSearchSchema.parse(req.body);
      
      // Check cache first
      const cached = await storage.getCachedCarInfo(carName);
      if (cached) {
        return res.json(cached);
      }

      // Get information from AI
      const carInfo = await getCarInformationFromAI(carName);
      
      // Cache the result
      await storage.setCachedCarInfo(carName, carInfo);
      
      res.json(carInfo);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid request data", 
          errors: error.errors 
        });
      }
      
      console.error("Car search error:", error);
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to search for car information" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
