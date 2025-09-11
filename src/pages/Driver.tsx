import { useState } from "react";
import { Bus, Play, Square, Navigation, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Driver = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [busId, setBusId] = useState("");
  const [routeNumber, setRouteNumber] = useState("");
  const { toast } = useToast();

  const handleStartTracking = () => {
    if (!busId || !routeNumber) {
      toast({
        title: "Missing Information",
        description: "Please enter both Bus ID and Route Number",
        variant: "destructive",
      });
      return;
    }

    setIsTracking(true);
    toast({
      title: "Tracking Started",
      description: `Now tracking Bus ${busId} on Route ${routeNumber}`,
    });
  };

  const handleStopTracking = () => {
    setIsTracking(false);
    toast({
      title: "Tracking Stopped",
      description: "GPS tracking has been disabled",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary p-4 shadow-medium">
              <Bus className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-foreground">Driver Dashboard</h1>
          <p className="text-muted-foreground">Manage your bus tracking and route information</p>
        </div>

        {/* Bus Information Card */}
        <Card className="mb-6 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bus className="h-5 w-5 text-primary" />
              Bus Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="busId">Bus ID</Label>
              <Input
                id="busId"
                placeholder="Enter Bus ID (e.g., BUS001)"
                value={busId}
                onChange={(e) => setBusId(e.target.value)}
                disabled={isTracking}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="routeNumber">Route Number</Label>
              <Input
                id="routeNumber"
                placeholder="Enter Route Number (e.g., Route 42)"
                value={routeNumber}
                onChange={(e) => setRouteNumber(e.target.value)}
                disabled={isTracking}
              />
            </div>
          </CardContent>
        </Card>

        {/* Tracking Status Card */}
        <Card className="mb-6 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">Tracking Status</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant={isTracking ? "default" : "secondary"}>
                    {isTracking ? "Active" : "Inactive"}
                  </Badge>
                  {isTracking && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                      Live GPS
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                {isTracking ? (
                  <Button
                    onClick={handleStopTracking}
                    variant="destructive"
                    className="shadow-medium"
                  >
                    <Square className="mr-2 h-4 w-4" />
                    Stop Tracking
                  </Button>
                ) : (
                  <Button
                    onClick={handleStartTracking}
                    className="gradient-primary shadow-medium"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Start Tracking
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Stats (shown when tracking) */}
        {isTracking && (
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Navigation className="mx-auto mb-2 h-6 w-6 text-primary" />
                <div className="text-2xl font-bold text-card-foreground">45 km/h</div>
                <div className="text-sm text-muted-foreground">Current Speed</div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Users className="mx-auto mb-2 h-6 w-6 text-secondary" />
                <div className="text-2xl font-bold text-card-foreground">28</div>
                <div className="text-sm text-muted-foreground">Passengers</div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-4 text-center">
                <Clock className="mx-auto mb-2 h-6 w-6 text-accent" />
                <div className="text-2xl font-bold text-card-foreground">12:45</div>
                <div className="text-sm text-muted-foreground">Last Update</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Instructions */}
        <Card className="mt-6 border-muted bg-muted/20 shadow-soft">
          <CardContent className="p-4">
            <h4 className="mb-2 font-semibold text-card-foreground">Instructions:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Enter your Bus ID and Route Number to get started</li>
              <li>• Keep the app running in the background while driving</li>
              <li>• GPS location will be shared with passengers automatically</li>
              <li>• Stop tracking when you finish your route</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Driver;