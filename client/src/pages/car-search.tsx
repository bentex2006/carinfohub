import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SearchForm } from "@/components/search-form";
import { CarOverview } from "@/components/car-overview";
import { CarHistory } from "@/components/car-history";
import { CarSpecs } from "@/components/car-specs";
import { CarManufacturing } from "@/components/car-manufacturing";
import { CarPricing } from "@/components/car-pricing";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Bot, Star, BarChart3, Car, Search } from "lucide-react";
import { searchCarInformation } from "@/lib/openrouter";
import { type CarInformation } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function CarSearch() {
  const [carData, setCarData] = useState<CarInformation | null>(null);
  const { toast } = useToast();

  const searchMutation = useMutation({
    mutationFn: searchCarInformation,
    onSuccess: (data) => {
      setCarData(data);
      toast({
        title: "Car information retrieved successfully!",
        description: `Found comprehensive data for ${data.name}`,
      });
    },
    onError: (error) => {
      console.error("Search error:", error);
      toast({
        title: "Failed to get car information",
        description: error instanceof Error ? error.message : "Please try again with a different car name",
        variant: "destructive",
      });
    },
  });

  const handleSearch = (carName: string) => {
    searchMutation.mutate(carName);
  };

  const handleTryAgain = () => {
    setCarData(null);
    searchMutation.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <header className="relative z-10 glass-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Car className="text-primary h-10 w-10 animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CarInfoHub
                </h1>
                <p className="text-xs text-muted-foreground">Professional Car Research Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Advanced Analytics Engine</span>
              </div>
              <a
                href="https://github.com/bentex2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <span className="text-xs font-medium">@bentex2006</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Discover Any Car
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Get comprehensive information, specifications, pricing, and analysis for any vehicle with our advanced research platform.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8 sm:mb-12 px-4 sm:px-0">
          <SearchForm onSearch={handleSearch} isLoading={searchMutation.isPending} />
        </div>

        {/* Loading State */}
        {searchMutation.isPending && (
          <Card className="glass-card neon-border hover-lift mb-8 sm:mb-12 mx-4 sm:mx-0">
            <CardContent className="p-6 sm:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6 animate-pulse">
                  <Car className="text-primary h-10 w-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Analyzing Vehicle Data...
                </h3>
                <p className="text-muted-foreground mb-6 text-base sm:text-lg px-4 sm:px-0">
                  Processing comprehensive automotive information and market analysis
                </p>
                <div className="w-80 mx-auto bg-muted rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" style={{ width: "70%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Gathering specifications, pricing, and competitive analysis...
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error State */}
        {searchMutation.isError && !searchMutation.isPending && (
          <Card className="glass-card border-destructive/50 bg-destructive/5 mb-8 sm:mb-12 mx-4 sm:mx-0">
            <CardContent className="p-6 sm:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/20 rounded-full mb-6">
                  <AlertCircle className="text-destructive h-10 w-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Research Unavailable
                </h3>
                <p className="text-muted-foreground mb-6 text-base sm:text-lg max-w-md mx-auto px-4 sm:px-0">
                  {searchMutation.error instanceof Error 
                    ? searchMutation.error.message 
                    : "Unable to retrieve car information. Please try a different model or check your search terms."}
                </p>
                <Button 
                  onClick={handleTryAgain}
                  className="bg-destructive hover:bg-destructive/80 text-destructive-foreground px-8 py-3 font-semibold"
                  data-testid="button-try-again"
                >
                  Try Different Search
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Car Information Display */}
        {carData && !searchMutation.isPending && (
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0" data-testid="car-results">
            {/* Car Overview */}
            <CarOverview car={carData} />

            {/* Car History & Achievements */}
            <CarHistory car={carData} />

            {/* Technical Specifications */}
            <CarSpecs car={carData} />

            {/* Manufacturing & Companies */}
            <CarManufacturing car={carData} />

            {/* Global Pricing */}
            <CarPricing car={carData} />

            {/* Additional Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Reviews & Ratings */}
              <Card className="glass-card neon-border hover-lift">
                <div className="border-b border-border/50 p-6">
                  <h2 className="text-xl font-bold text-foreground flex items-center">
                    <Star className="text-accent mr-3 h-6 w-6" />
                    Reviews & Ratings
                  </h2>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Overall Rating</span>
                      <div className="flex items-center">
                        <div className="flex text-accent mr-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < Math.floor(carData.ratings.overall) ? 'fill-current' : 'stroke-current'}`} />
                          ))}
                        </div>
                        <span className="font-semibold text-foreground" data-testid="text-overall-rating">
                          {carData.ratings.overall}/5
                        </span>
                      </div>
                    </div>
                    
                    {[
                      { label: "Performance", value: carData.ratings.performance, color: "bg-accent" },
                      { label: "Technology", value: carData.ratings.technology, color: "bg-secondary" },
                      { label: "Value", value: carData.ratings.value, color: "bg-primary" }
                    ].map((rating, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{rating.label}</span>
                        <div className="flex items-center">
                          <div className="w-28 bg-muted rounded-full h-2 mr-3">
                            <div 
                              className={`${rating.color} h-2 rounded-full transition-all duration-500`} 
                              style={{ width: `${(rating.value / 10) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-foreground min-w-[3rem]" data-testid={`text-${rating.label.toLowerCase()}-rating`}>
                            {rating.value}/10
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Competitors */}
              <Card className="glass-card neon-border hover-lift">
                <div className="border-b border-border/50 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center">
                    <BarChart3 className="text-secondary mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    Key Competitors
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">Click any competitor to research</p>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {carData.competitors.map((competitor, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(competitor.name)}
                        className="w-full flex items-center justify-between p-3 sm:p-4 bg-muted/20 rounded-lg border border-border/30 hover:bg-muted/30 hover:border-primary/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer group"
                        data-testid={`button-competitor-${index}`}
                      >
                        <div className="flex items-center min-w-0 flex-1">
                          <Car className="text-primary mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:text-accent transition-colors flex-shrink-0" />
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate" data-testid={`text-competitor-${index}`}>
                            {competitor.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                          <span className="text-xs sm:text-sm text-muted-foreground font-medium" data-testid={`text-competitor-price-${index}`}>
                            {competitor.price}
                          </span>
                          <Search className="text-muted-foreground group-hover:text-accent h-3 w-3 sm:h-4 sm:w-4 transition-colors" />
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 glass-card border-t border-border/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">CarInfoHub</h4>
              <p className="text-muted-foreground text-sm">
                Professional automotive research platform providing comprehensive vehicle analysis and market insights.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Technology</h4>
              <p className="text-muted-foreground text-sm">
                Built with modern web technologies and advanced data processing algorithms for accurate automotive intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Developer</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  Developed by <span className="text-primary font-medium">Bentex</span>
                </p>
                <a
                  href="https://github.com/bentex2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
                >
                  <span>GitHub: bentex2006</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 CarInfoHub - Educational Project. Built for learning and demonstration purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
