import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";

interface SearchFormProps {
  onSearch: (carName: string) => void;
  isLoading: boolean;
}

export function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [carName, setCarName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (carName.trim()) {
      onSearch(carName.trim());
    }
  };

  return (
    <Card className="glass-card neon-border hover-lift">
      <CardContent className="p-6 sm:p-8 lg:p-12">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden">
              <div className="sm:hidden">
                {/* Mobile layout */}
                <Input
                  type="text"
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                  placeholder="Enter car model (e.g., Tesla Model S)"
                  className="w-full px-4 py-4 pl-12 text-base bg-transparent border-0 focus:ring-0 placeholder:text-muted-foreground/70"
                  disabled={isLoading}
                  data-testid="input-car-search"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
                <Button
                  type="submit"
                  disabled={isLoading || !carName.trim()}
                  className="w-full mt-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground py-3 font-semibold rounded-lg transition-all duration-300"
                  data-testid="button-search"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {isLoading ? "Analyzing..." : "Research"}
                </Button>
              </div>
              
              <div className="hidden sm:block">
                {/* Desktop/Tablet layout */}
                <Input
                  type="text"
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                  placeholder="Enter any car model (e.g., Tesla Model S, BMW M3, Toyota Camry)"
                  className="w-full px-6 py-6 pl-16 pr-32 text-lg bg-transparent border-0 focus:ring-0 placeholder:text-muted-foreground/70"
                  disabled={isLoading}
                  data-testid="input-car-search"
                />
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-primary h-6 w-6" />
                <Button
                  type="submit"
                  disabled={isLoading || !carName.trim()}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  data-testid="button-search"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {isLoading ? "Analyzing..." : "Research"}
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 sm:mt-6 space-y-2">
            <p className="text-muted-foreground text-sm sm:text-base">
              Advanced automotive research powered by comprehensive data analysis
            </p>
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 text-xs text-muted-foreground/70">
              <span>• Specifications</span>
              <span>• Global Pricing</span>
              <span>• Market Analysis</span>
              <span>• Manufacturing Data</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
