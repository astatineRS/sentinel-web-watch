
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker to-cyber-dark">
      <div className="container px-4 py-8 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
