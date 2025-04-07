
import { cn } from "@/lib/utils";

type BadgeVariant = "critical" | "high" | "medium" | "low" | "info" | "secure" | "scanning" | "completed" | "failed";

interface StatusBadgeProps {
  variant: BadgeVariant;
  text: string;
  className?: string;
}

const getVariantStyles = (variant: BadgeVariant) => {
  switch (variant) {
    case "critical":
      return "bg-cyber-red/10 text-cyber-red border-cyber-red";
    case "high": 
      return "bg-cyber-orange/10 text-cyber-orange border-cyber-orange";
    case "medium":
      return "bg-cyber-yellow/10 text-cyber-yellow border-cyber-yellow";
    case "low":
      return "bg-cyber-green/10 text-cyber-green border-cyber-green";
    case "info":
      return "bg-cyber-blue/10 text-cyber-blue border-cyber-blue";
    case "secure":
      return "bg-cyber-green/10 text-cyber-green border-cyber-green";
    case "scanning":
      return "bg-cyber-blue/10 text-cyber-blue border-cyber-blue relative overflow-hidden";
    case "completed":
      return "bg-cyber-green/10 text-cyber-green border-cyber-green";
    case "failed":
      return "bg-cyber-red/10 text-cyber-red border-cyber-red";
    default:
      return "bg-cyber-blue/10 text-cyber-blue border-cyber-blue";
  }
};

const StatusBadge = ({ variant, text, className }: StatusBadgeProps) => {
  const scanningAnimation = variant === "scanning" ? (
    <div className="scan-line animate-scanning"></div>
  ) : null;

  return (
    <div 
      className={cn(
        "px-2.5 py-0.5 text-xs font-medium rounded-full border",
        getVariantStyles(variant),
        className
      )}
    >
      {text}
      {scanningAnimation}
    </div>
  );
};

export default StatusBadge;
