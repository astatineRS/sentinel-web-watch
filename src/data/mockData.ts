
export type SeverityLevel = "critical" | "high" | "medium" | "low";
export type ScanStatus = "scanning" | "completed" | "failed";
export type VulnerabilityType = 
  | "XSS" 
  | "SQL Injection" 
  | "CSRF" 
  | "Broken Authentication" 
  | "Security Misconfiguration" 
  | "Sensitive Data Exposure" 
  | "Broken Access Control" 
  | "XML External Entities" 
  | "Insecure Deserialization" 
  | "Insufficient Logging & Monitoring";

export interface Vulnerability {
  id: string;
  name: string;
  type: VulnerabilityType;
  severity: SeverityLevel;
  path: string;
  description: string;
  detectionDate: string;
  status: "open" | "fixed" | "false-positive";
  remediation: string;
}

export interface Scan {
  id: string;
  targetUrl: string;
  startTime: string;
  endTime: string | null;
  status: ScanStatus;
  vulnerabilitiesFound: number;
  progress: number;
}

export interface ScanMetricsData {
  totalScans: number;
  vulnerabilitiesDetected: number;
  criticalVulnerabilities: number;
  highVulnerabilities: number;
  mediumVulnerabilities: number;
  lowVulnerabilities: number;
  averageScanTime: string;
  scanSuccessRate: number;
}

export const mockVulnerabilities: Vulnerability[] = [
  {
    id: "vuln-001",
    name: "Stored Cross-Site Scripting",
    type: "XSS",
    severity: "critical",
    path: "/api/comments",
    description: "User input from comment field is stored and displayed without proper sanitization, allowing script execution.",
    detectionDate: "2025-04-05T10:23:15Z",
    status: "open",
    remediation: "Implement proper input validation and output encoding using a library like DOMPurify."
  },
  {
    id: "vuln-002",
    name: "SQL Injection Vulnerability",
    type: "SQL Injection",
    severity: "critical",
    path: "/api/users?id=1",
    description: "User ID parameter is directly concatenated into SQL query without parameterization.",
    detectionDate: "2025-04-05T11:42:30Z",
    status: "open",
    remediation: "Use prepared statements or an ORM with proper parameterization."
  },
  {
    id: "vuln-003",
    name: "Missing CSRF Token",
    type: "CSRF",
    severity: "high",
    path: "/api/account/settings",
    description: "Form submission lacks CSRF token, allowing attackers to perform actions on behalf of authenticated users.",
    detectionDate: "2025-04-05T09:15:40Z",
    status: "open",
    remediation: "Implement CSRF tokens for all state-changing operations."
  },
  {
    id: "vuln-004",
    name: "Insecure Direct Object Reference",
    type: "Broken Access Control",
    severity: "high",
    path: "/api/documents/123",
    description: "API endpoint allows access to resources by manipulating the ID without proper authorization checks.",
    detectionDate: "2025-04-04T14:22:10Z",
    status: "fixed",
    remediation: "Implement proper authorization checks for each resource access."
  },
  {
    id: "vuln-005",
    name: "Sensitive Data in Logs",
    type: "Sensitive Data Exposure",
    severity: "medium",
    path: "/api/payment/process",
    description: "Payment API logs contain credit card details in plaintext.",
    detectionDate: "2025-04-04T16:35:20Z",
    status: "open",
    remediation: "Implement data masking for sensitive information in logs."
  },
  {
    id: "vuln-006",
    name: "Weak Password Policy",
    type: "Broken Authentication",
    severity: "medium",
    path: "/api/auth/register",
    description: "Registration allows weak passwords without enforcing complexity requirements.",
    detectionDate: "2025-04-03T11:10:45Z",
    status: "open",
    remediation: "Implement stronger password policy with length, complexity, and common password checks."
  },
  {
    id: "vuln-007",
    name: "Excessive Error Details",
    type: "Security Misconfiguration",
    severity: "low",
    path: "/api/data/fetch",
    description: "API returns detailed error messages including stack traces that could reveal implementation details.",
    detectionDate: "2025-04-03T09:30:15Z",
    status: "open",
    remediation: "Implement proper error handling with user-friendly messages and detailed logging server-side only."
  },
  {
    id: "vuln-008",
    name: "Missing Security Headers",
    type: "Security Misconfiguration",
    severity: "low",
    path: "Global",
    description: "Application missing important security headers like Content-Security-Policy and X-XSS-Protection.",
    detectionDate: "2025-04-02T15:45:30Z",
    status: "false-positive",
    remediation: "Configure web server to include appropriate security headers with all responses."
  }
];

export const mockScans: Scan[] = [
  {
    id: "scan-001",
    targetUrl: "https://example.com",
    startTime: "2025-04-05T09:00:00Z",
    endTime: "2025-04-05T09:45:30Z",
    status: "completed",
    vulnerabilitiesFound: 12,
    progress: 100
  },
  {
    id: "scan-002",
    targetUrl: "https://api.example.org",
    startTime: "2025-04-05T14:30:00Z",
    endTime: null,
    status: "scanning",
    vulnerabilitiesFound: 3,
    progress: 65
  },
  {
    id: "scan-003",
    targetUrl: "https://test.example.net",
    startTime: "2025-04-04T11:15:00Z",
    endTime: "2025-04-04T11:58:20Z",
    status: "completed",
    vulnerabilitiesFound: 0,
    progress: 100
  },
  {
    id: "scan-004",
    targetUrl: "https://dev.example.com",
    startTime: "2025-04-03T16:45:00Z",
    endTime: "2025-04-03T17:02:10Z",
    status: "failed",
    vulnerabilitiesFound: 0,
    progress: 37
  }
];

export const mockScanMetrics: ScanMetricsData = {
  totalScans: 23,
  vulnerabilitiesDetected: 87,
  criticalVulnerabilities: 14,
  highVulnerabilities: 23,
  mediumVulnerabilities: 31,
  lowVulnerabilities: 19,
  averageScanTime: "34m",
  scanSuccessRate: 92
};

export const getVulnerabilityDistribution = () => {
  return [
    { name: "Critical", value: mockScanMetrics.criticalVulnerabilities, color: "#ff453a" },
    { name: "High", value: mockScanMetrics.highVulnerabilities, color: "#ff9f0a" },
    { name: "Medium", value: mockScanMetrics.mediumVulnerabilities, color: "#ffd60a" },
    { name: "Low", value: mockScanMetrics.lowVulnerabilities, color: "#30d158" }
  ];
};

export const getVulnerabilityTypesDistribution = () => {
  const counts: Record<VulnerabilityType, number> = {
    "XSS": 18,
    "SQL Injection": 11,
    "CSRF": 9,
    "Broken Authentication": 12,
    "Security Misconfiguration": 14,
    "Sensitive Data Exposure": 7,
    "Broken Access Control": 8,
    "XML External Entities": 2,
    "Insecure Deserialization": 3,
    "Insufficient Logging & Monitoring": 3
  };
  
  return Object.entries(counts).map(([name, value]) => ({
    name,
    value
  }));
};

export const getTimelineData = () => {
  return [
    { date: "Apr 1", vulnerabilities: 5 },
    { date: "Apr 2", vulnerabilities: 3 },
    { date: "Apr 3", vulnerabilities: 12 },
    { date: "Apr 4", vulnerabilities: 8 },
    { date: "Apr 5", vulnerabilities: 15 },
    { date: "Apr 6", vulnerabilities: 11 },
    { date: "Apr 7", vulnerabilities: 7 }
  ];
};
