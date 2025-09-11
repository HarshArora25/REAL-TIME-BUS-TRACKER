import { Bus, Home, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  if (isHome) return null;

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <div className="flex items-center gap-2">
          <Bus className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">BusTracker</span>
        </div>

        <div className="flex gap-2">
          <Button
            variant={location.pathname === "/passenger" ? "default" : "ghost"}
            size="sm"
            onClick={() => navigate("/passenger")}
            className="flex items-center gap-1"
          >
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Passenger</span>
          </Button>
          <Button
            variant={location.pathname === "/driver" ? "default" : "ghost"}
            size="sm"
            onClick={() => navigate("/driver")}
            className="flex items-center gap-1"
          >
            <Bus className="h-4 w-4" />
            <span className="hidden sm:inline">Driver</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;