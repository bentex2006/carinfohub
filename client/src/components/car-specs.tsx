import { Card, CardContent } from "@/components/ui/card";
import { Settings, Leaf } from "lucide-react";
import { type CarInformation } from "@shared/schema";

interface CarSpecsProps {
  car: CarInformation;
}

export function CarSpecs({ car }: CarSpecsProps) {
  const powerSpecs = [
    { label: "Engine Type", value: car.specs.engine },
    { label: "Max Power", value: car.specs.power },
    { label: "Max Torque", value: car.specs.torque },
    { label: "Top Speed", value: car.specs.topSpeed },
    { label: "Drive Type", value: car.specs.drive },
  ];

  const efficiencySpecs = [
    { label: "Range/Economy", value: car.specs.range },
    { label: "Energy Consumption", value: car.specs.consumption },
    { label: "CO2 Emissions", value: car.specs.emissions },
    { label: "Charging Time", value: car.specs.charging },
    { label: "Battery Capacity", value: car.specs.battery },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      <Card className="glass-card neon-border hover-lift">
        <div className="border-b border-border/50 p-6">
          <h2 className="text-xl font-bold text-foreground flex items-center">
            <Settings className="text-secondary mr-3 h-6 w-6" />
            Power & Performance
          </h2>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            {powerSpecs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-border/30">
                <span className="text-muted-foreground">{spec.label}</span>
                <span className="font-semibold text-foreground" data-testid={`text-spec-${spec.label.toLowerCase().replace(' ', '-')}`}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card neon-border hover-lift">
        <div className="border-b border-border/50 p-6">
          <h2 className="text-xl font-bold text-foreground flex items-center">
            <Leaf className="text-accent mr-3 h-6 w-6" />
            Efficiency & Environment
          </h2>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            {efficiencySpecs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-border/30">
                <span className="text-muted-foreground">{spec.label}</span>
                <span className="font-semibold text-foreground" data-testid={`text-efficiency-${spec.label.toLowerCase().replace(' ', '-')}`}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
