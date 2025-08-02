import { Card, CardContent } from "@/components/ui/card";
import { Globe, Flag, Info } from "lucide-react";
import { type CarInformation } from "@shared/schema";

interface CarPricingProps {
  car: CarInformation;
}

export function CarPricing({ car }: CarPricingProps) {
  const pricingData = [
    {
      country: "USA",
      price: car.pricing.usa,
      gradient: "from-blue-50 to-blue-100",
      flagColor: "bg-blue-600",
      priceColor: "text-blue-600",
      note: "Starting MSRP",
      disclaimer: "Before incentives"
    },
    {
      country: "China",
      price: car.pricing.china,
      gradient: "from-red-50 to-red-100",
      flagColor: "bg-red-600",
      priceColor: "text-red-600",
      note: "Base price (CNY)",
      disclaimer: "Local market pricing"
    },
    {
      country: "India",
      price: car.pricing.india,
      gradient: "from-orange-50 to-orange-100",
      flagColor: "bg-orange-600",
      priceColor: "text-orange-600",
      note: "Expected price (INR)",
      disclaimer: "Import duties included"
    },
    {
      country: "Dubai",
      price: car.pricing.dubai,
      gradient: "from-green-50 to-green-100",
      flagColor: "bg-green-600",
      priceColor: "text-green-600",
      note: "Starting price (AED)",
      disclaimer: "Tax-free pricing"
    }
  ];

  return (
    <Card className="glass-card neon-border hover-lift">
      <div className="border-b border-border/50 p-6">
        <h2 className="text-xl font-bold text-foreground flex items-center">
          <Globe className="text-accent mr-3 h-6 w-6" />
          Global Pricing Information
        </h2>
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {pricingData.map((item, index) => (
            <div key={index} className="bg-muted/20 border border-border/30 rounded-lg p-6 text-center hover:bg-muted/30 transition-colors">
              <div className={`w-12 h-8 mx-auto mb-3 ${item.flagColor} rounded flex items-center justify-center`}>
                <Flag className="text-white h-4 w-4" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1" data-testid={`text-country-${item.country.toLowerCase()}`}>
                {item.country}
              </h3>
              <p className={`text-2xl font-bold ${item.priceColor} mb-1`} data-testid={`text-price-${item.country.toLowerCase()}`}>
                {item.price}
              </p>
              <p className="text-muted-foreground text-sm">{item.note}</p>
              <div className="mt-3 text-xs text-muted-foreground/70">
                <p>{item.disclaimer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <div className="flex items-start">
            <Info className="text-accent mt-1 mr-3 h-5 w-5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Pricing Notes</h4>
              <p className="text-muted-foreground text-sm">
                Prices vary based on configuration, local taxes, import duties, and available incentives. 
                Contact local dealers for current pricing and availability.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
