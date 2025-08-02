import { Card, CardContent } from "@/components/ui/card";
import { Zap, Gauge, Leaf } from "lucide-react";
import { type CarInformation } from "@shared/schema";

interface CarOverviewProps {
  car: CarInformation;
}

export function CarOverview({ car }: CarOverviewProps) {
  return (
    <Card className="glass-card neon-border hover-lift overflow-hidden">
      <div className="relative h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        {car.imageUrl && (
          <img
            src={car.imageUrl}
            alt={car.name}
            className="w-full h-full object-cover opacity-90"
            data-testid="img-car-hero"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent" data-testid="text-car-name">
            {car.name}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium" data-testid="text-car-tagline">
            {car.tagline}
          </p>
        </div>
      </div>

      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Zap className="text-accent h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground" data-testid="text-car-power">
              {car.specs.power}
            </h3>
            <p className="text-muted-foreground text-sm">Max Power</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Gauge className="text-secondary h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground" data-testid="text-car-acceleration">
              {car.specs.acceleration}
            </h3>
            <p className="text-muted-foreground text-sm">0-60 mph</p>
          </div>
          <div className="text-center">
            <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Leaf className="text-accent h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground" data-testid="text-car-range">
              {car.specs.range}
            </h3>
            <p className="text-muted-foreground text-sm">Range/Economy</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
