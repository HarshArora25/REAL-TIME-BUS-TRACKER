import { Bus, Users, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bus-tracking.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="gradient-hero absolute inset-0 opacity-20" />
        <div className="relative px-4 py-16 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-primary p-4 shadow-strong animate-tracking-pulse">
                <Bus className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Track Your Bus
              <span className="block text-primary">In Real-Time</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Never miss your bus again. Get real-time locations, accurate ETAs, and notifications
              when your bus is approaching your stop.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="gradient-primary border-0 px-8 py-4 text-lg font-semibold shadow-medium transition-smooth hover:shadow-strong transform hover:scale-105"
                onClick={() => navigate("/passenger")}
              >
                <Users className="mr-2 h-5 w-5" />
                I'm a Passenger
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary px-8 py-4 text-lg font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground transform hover:scale-105"
                onClick={() => navigate("/driver")}
              >
                <Bus className="mr-2 h-5 w-5" />
                I'm a Driver
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Why Choose Our Bus Tracking?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border bg-card shadow-soft transition-smooth hover:shadow-medium">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Real-Time Location
                </h3>
                <p className="text-muted-foreground">
                  Track your bus location with pinpoint accuracy using GPS technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-soft transition-smooth hover:shadow-medium">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-3">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Accurate ETAs
                </h3>
                <p className="text-muted-foreground">
                  Get precise arrival times based on real traffic conditions and bus speed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-soft transition-smooth hover:shadow-medium">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-3">
                    <Bus className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Smart Notifications
                </h3>
                <p className="text-muted-foreground">
                  Receive alerts when your bus is approaching your stop or running late.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;