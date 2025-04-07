
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Shield, ShieldAlert } from "lucide-react";
import ScanConfigModal from "./ScanConfigModal";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <div className="flex items-center space-x-2">
          <div className="flex bg-cyber-blue/20 p-2 rounded-lg animate-pulse-glow">
            <ShieldAlert className="h-8 w-8 text-cyber-blue" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Sentinel Web Watch</h1>
          <Badge variant="outline" className="ml-2">v1.0.0</Badge>
        </div>
        <p className="text-muted-foreground mt-1">
          Advanced vulnerability scanning and security analysis dashboard
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-1">
          <Calendar className="h-4 w-4" />
          <span className="hidden md:inline">Schedule</span>
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          <span className="hidden md:inline">Export</span>
        </Button>
        <ScanConfigModal />
      </div>
    </div>
  );
};

export default DashboardHeader;
