import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, Award, Star } from "lucide-react";
import { type CarInformation } from "@shared/schema";

interface CarHistoryProps {
  car: CarInformation;
}

export function CarHistory({ car }: CarHistoryProps) {
  return (
    <Card className="glass-card neon-border hover-lift">
      <div className="border-b border-border/50 p-6">
        <h2 className="text-xl font-bold text-foreground flex items-center">
          <Trophy className="text-accent mr-3 h-6 w-6" />
          History & Achievements
        </h2>
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="prose max-w-none text-foreground">
          <p className="mb-4 sm:mb-6 text-muted-foreground leading-relaxed text-sm sm:text-base" data-testid="text-car-history">
            {car.history}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
            <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
              <h4 className="font-semibold text-foreground mb-3">Key Milestones</h4>
              <ul className="space-y-3 text-sm">
                {car.keyMilestones.map((milestone, index) => (
                  <li key={index} className="flex items-start text-muted-foreground" data-testid={`text-milestone-${index}`}>
                    <Calendar className="text-accent mr-3 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
              <h4 className="font-semibold text-foreground mb-3">Innovation Awards</h4>
              <ul className="space-y-3 text-sm">
                {car.innovationAwards.map((award, index) => (
                  <li key={index} className="flex items-start text-muted-foreground" data-testid={`text-award-${index}`}>
                    <Award className="text-secondary mr-3 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
