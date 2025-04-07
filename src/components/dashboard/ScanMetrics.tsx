
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScanMetricsData } from "@/data/mockData";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface ScanMetricsProps {
  metrics: ScanMetricsData;
}

const MetricCard = ({ title, value, description }: { title: string; value: string | number; description?: string }) => (
  <TooltipProvider>
    <Card className="glass-panel">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center justify-between">
          <span>{title}</span>
          {description && (
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-64">{description}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  </TooltipProvider>
);

const ScanMetrics = ({ metrics }: ScanMetricsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MetricCard 
        title="Total Scans" 
        value={metrics.totalScans} 
        description="Number of completed vulnerability scans"
      />
      <MetricCard 
        title="Total Vulnerabilities" 
        value={metrics.vulnerabilitiesDetected} 
        description="Total number of vulnerabilities detected across all scans"
      />
      <MetricCard 
        title="Critical Vulnerabilities" 
        value={metrics.criticalVulnerabilities} 
        description="Vulnerabilities that pose immediate security threats requiring urgent attention"
      />
      <MetricCard 
        title="High Vulnerabilities" 
        value={metrics.highVulnerabilities} 
        description="Serious vulnerabilities that should be addressed soon"
      />
      <MetricCard 
        title="Medium Vulnerabilities" 
        value={metrics.mediumVulnerabilities} 
        description="Moderate risk vulnerabilities that should be fixed in regular development cycles"
      />
      <MetricCard 
        title="Low Vulnerabilities" 
        value={metrics.lowVulnerabilities} 
        description="Low risk issues that should be addressed when possible"
      />
      <MetricCard 
        title="Average Scan Time" 
        value={metrics.averageScanTime} 
        description="Average time to complete a full vulnerability scan"
      />
      <MetricCard 
        title="Success Rate" 
        value={`${metrics.scanSuccessRate}%`} 
        description="Percentage of scans that complete successfully without errors"
      />
    </div>
  );
};

export default ScanMetrics;
