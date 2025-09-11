import { useState } from "react";
import { MapPin, Clock, Bus, Bell, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Passenger = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedStop, setSelectedStop] = useState("");
  const [notifications, setNotifications] = useState(false);
  const { toast } = useToast();

  // Mock route data
  const routes = [
    { id: "route-42", name: "Route 42", description: "New Delhi ↔ Ghaziabad" },
    { id: "route-15", name: "Route 15", description: "Kashmere Gate ↔ Gurgaon" },
    { id: "route-8", name: "Route 8", description: "Rajiv Chowk ↔ Pari Chowk" },
    { id: "route-8", name: "Route 8", description: "Kashmere Gate ↔ Prayagraj" },
    { id: "route-8", name: "Route 8", description: "New Delhi ↔ Lucknow" },
    { id: "route-8", name: "Route 8", description: "Pari Chowk ↔ Kanpur" },
  ];

  const stops = [
    "Kashmere Gate",
    "New Delhi",
    "Pari Chowk",
    "Rajiv Chowk",
    "Gurgaon",
    "Lucknow",
    "Ghaziabad",
    "Prayagraj",
    "Kanpur",
  ];

  const handleTrackBus = () => {
    if (!selectedRoute) {
      toast({
        title: "Select a Route",
        description: "Please choose a bus route to track",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Tracking Started",
      description: `Now tracking ${selectedRoute}`,
    });
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
    toast({
      title: notifications ? "Notifications Disabled" : "Notifications Enabled",
      description: notifications 
        ? "You won't receive bus arrival alerts" 
        : "You'll be notified when your bus approaches",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-secondary p-4 shadow-medium">
              <MapPin className="h-8 w-8 text-secondary-foreground" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-foreground">Passenger Dashboard</h1>
          <p className="text-muted-foreground">Track your bus and get real-time updates</p>
        </div>

        {/* Route Selection */}
        <Card className="mb-6 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bus className="h-5 w-5 text-primary" />
              Select Your Route
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="route">Bus Route</Label>
              <Select value={selectedRoute} onValueChange={setSelectedRoute}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a bus route" />
                </SelectTrigger>
                <SelectContent>
                  {routes.map((route) => (
                    <SelectItem key={route.id} value={route.name}>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{route.name}</span>
                        <span className="text-sm text-muted-foreground">{route.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="stop">Your Stop (Optional)</Label>
              <Select value={selectedStop} onValueChange={setSelectedStop}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your bus stop" />
                </SelectTrigger>
                <SelectContent>
                  {stops.map((stop) => (
                    <SelectItem key={stop} value={stop}>
                      {stop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleTrackBus}
              className="w-full gradient-primary shadow-medium"
              size="lg"
            >
              <Search className="mr-2 h-4 w-4" />
              Track This Bus
            </Button>
          </CardContent>
        </Card>

        {/* Live Bus Information */}
        {selectedRoute && (
          <Card className="mb-6 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-success" />
                  Live Bus Location
                </span>
                <Badge variant="default" className="animate-pulse">
                  Live
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="gradient-map rounded-lg p-8 text-center">
                <Bus className="mx-auto mb-4 h-12 w-12 text-primary animate-tracking-pulse" />
                <p className="text-lg font-semibold text-foreground">Bus is currently at</p>
                <p className="text-2xl font-bold text-primary">Golf Course</p>
                <p className="mt-2 text-muted-foreground">Moving towards Pari Chowk</p>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-card-foreground">ETA to Your Stop</p>
                    <p className="text-lg font-bold text-accent">8 minutes</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                  <Bus className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-semibold text-card-foreground">Bus Speed</p>
                    <p className="text-lg font-bold text-secondary">35 km/h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notification Settings */}
        <Card className="mb-6 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Bus Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Get notified when your bus is approaching
                  </p>
                </div>
              </div>
              <Button
                onClick={toggleNotifications}
                variant={notifications ? "default" : "outline"}
                size="sm"
              >
                {notifications ? "Enabled" : "Enable"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Routes */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {routes.slice(0, 5).map((route) => (
                <div
                  key={route.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3 transition-smooth hover:bg-muted/50"
                >
                  <div>
                    <p className="font-medium text-card-foreground">{route.name}</p>
                    <p className="text-sm text-muted-foreground">{route.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedRoute(route.name)}
                  >
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Passenger;