
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ScanMetrics from "@/components/dashboard/ScanMetrics";
import VulnerabilityChart from "@/components/dashboard/VulnerabilityChart";
import RecentScans from "@/components/dashboard/RecentScans";
import VulnerabilityTable from "@/components/dashboard/VulnerabilityTable";
import { mockScanMetrics, mockScans, mockVulnerabilities } from "@/data/mockData";

const Index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />
      
      <div className="space-y-6">
        <ScanMetrics metrics={mockScanMetrics} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VulnerabilityChart />
          <Card className="glass-panel col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle>Security Summary</CardTitle>
              <CardDescription>Current security posture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Overall Security</h3>
                  <progress 
                    value={72} 
                    max={100} 
                    className="w-[60%] [&::-webkit-progress-value]:bg-cyber-blue [&::-webkit-progress-bar]:bg-secondary"
                  />
                  <span className="text-sm">72%</span>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Top Issues</h3>
                  <ul className="space-y-2">
                    <li className="bg-card rounded-md p-2 flex items-start space-x-2 text-sm">
                      <ShieldOff className="h-4 w-4 text-cyber-red mt-0.5" />
                      <div>
                        <p className="font-medium">Missing Authentication</p>
                        <p className="text-xs text-muted-foreground">4 endpoints affected</p>
                      </div>
                    </li>
                    <li className="bg-card rounded-md p-2 flex items-start space-x-2 text-sm">
                      <Bug className="h-4 w-4 text-cyber-orange mt-0.5" />
                      <div>
                        <p className="font-medium">XSS Vulnerabilities</p>
                        <p className="text-xs text-muted-foreground">7 instances detected</p>
                      </div>
                    </li>
                    <li className="bg-card rounded-md p-2 flex items-start space-x-2 text-sm">
                      <Key className="h-4 w-4 text-cyber-yellow mt-0.5" />
                      <div>
                        <p className="font-medium">Weak Encryption</p>
                        <p className="text-xs text-muted-foreground">3 services affected</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <RecentScans scans={mockScans} />
        
        <VulnerabilityTable vulnerabilities={mockVulnerabilities} />
      </div>
    </DashboardLayout>
  );
};

// Import additional components needed for the security summary card
import { Bug, Key, ShieldOff } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default Index;
