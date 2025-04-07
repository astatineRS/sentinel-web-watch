
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Scan } from "@/data/mockData";
import StatusBadge from "../common/StatusBadge";
import { formatDistanceToNow } from "date-fns";
import { Progress } from "@/components/ui/progress";

interface RecentScansProps {
  scans: Scan[];
}

const RecentScans = ({ scans }: RecentScansProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <Card className="glass-panel col-span-full">
      <CardHeader>
        <CardTitle>Recent Scans</CardTitle>
        <CardDescription>
          Latest vulnerability scans and their status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Target URL</TableHead>
              <TableHead>Started</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vulnerabilities</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scans.map((scan) => (
              <TableRow key={scan.id}>
                <TableCell className="font-medium terminal-text">{scan.targetUrl}</TableCell>
                <TableCell>{formatDate(scan.startTime)}</TableCell>
                <TableCell>
                  <StatusBadge variant={scan.status} text={scan.status.charAt(0).toUpperCase() + scan.status.slice(1)} />
                </TableCell>
                <TableCell>{scan.vulnerabilitiesFound}</TableCell>
                <TableCell className="w-[180px]">
                  <div className="flex items-center gap-2">
                    <Progress value={scan.progress} className="h-2" />
                    <span className="text-xs">{scan.progress}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentScans;
