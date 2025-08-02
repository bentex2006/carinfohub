import { Card, CardContent } from "@/components/ui/card";
import { Factory, Building, Microchip, Battery, MapPin } from "lucide-react";
import { type CarInformation } from "@shared/schema";

interface CarManufacturingProps {
  car: CarInformation;
}

export function CarManufacturing({ car }: CarManufacturingProps) {
  return (
    <Card className="glass-card neon-border hover-lift">
      <div className="border-b border-border/50 p-6">
        <h2 className="text-xl font-bold text-foreground flex items-center">
          <Factory className="text-primary mr-3 h-6 w-6" />
          Manufacturing & Partners
        </h2>
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Building className="text-primary h-8 w-8" />
            </div>
            <h3 className="font-semibold text-foreground mb-1" data-testid="text-manufacturer">
              {car.manufacturing.manufacturer}
            </h3>
            <p className="text-muted-foreground text-sm">Primary Manufacturer</p>
          </div>
          
          {car.manufacturing.chipPartner && (
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Microchip className="text-secondary h-8 w-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-1" data-testid="text-chip-partner">
                {car.manufacturing.chipPartner}
              </h3>
              <p className="text-muted-foreground text-sm">Technology Partner</p>
            </div>
          )}
          
          {car.manufacturing.batteryPartner && (
            <div className="text-center p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Battery className="text-accent h-8 w-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-1" data-testid="text-battery-partner">
                {car.manufacturing.batteryPartner}
              </h3>
              <p className="text-muted-foreground text-sm">Battery Technology</p>
            </div>
          )}
        </div>
        
        <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <h4 className="font-semibold text-foreground mb-3">Manufacturing Locations</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {car.manufacturing.locations.map((location, index) => (
              <div key={index} className="flex items-center text-muted-foreground" data-testid={`text-location-${index}`}>
                <MapPin className="text-secondary mr-2 h-4 w-4" />
                <span>{location}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
