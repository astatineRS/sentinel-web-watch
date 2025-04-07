
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const ScanConfigModal = () => {
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  
  const handleStartScan = () => {
    if (!url.trim()) {
      toast.error("Please enter a valid URL to scan");
      return;
    }
    
    toast.success(`Scan initiated for ${url}`, {
      description: "You can track the progress in the Recent Scans section",
    });
    
    setOpen(false);
    setUrl("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-cyber-blue hover:bg-cyber-blue/90">
          New Scan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] glass-panel border-cyber-blue/30">
        <DialogHeader>
          <DialogTitle>Configure New Vulnerability Scan</DialogTitle>
          <DialogDescription>
            Set up the parameters for your security scan
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic">
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Target URL</Label>
                <Input
                  id="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="terminal-text"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Scan Type</Label>
                <Select defaultValue="full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select scan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Scan Types</SelectLabel>
                      <SelectItem value="full">Full Scan</SelectItem>
                      <SelectItem value="quick">Quick Scan</SelectItem>
                      <SelectItem value="passive">Passive Scan</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Vulnerability Categories</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="xss" defaultChecked />
                    <label htmlFor="xss" className="text-sm">XSS</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sqli" defaultChecked />
                    <label htmlFor="sqli" className="text-sm">SQL Injection</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="csrf" defaultChecked />
                    <label htmlFor="csrf" className="text-sm">CSRF</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="auth" defaultChecked />
                    <label htmlFor="auth" className="text-sm">Authentication</label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="threads">Threads</Label>
                  <Input id="threads" type="number" defaultValue="10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="depth">Crawl Depth</Label>
                  <Input id="depth" type="number" defaultValue="3" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="headers">Custom Headers (JSON)</Label>
                <Input
                  id="headers"
                  placeholder='{"Authorization": "Bearer token"}'
                  className="terminal-text"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="cookies" />
                  <label htmlFor="cookies" className="text-sm">Include cookies</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="forms" defaultChecked />
                  <label htmlFor="forms" className="text-sm">Test form submissions</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="api" defaultChecked />
                  <label htmlFor="api" className="text-sm">API endpoints testing</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="files" defaultChecked />
                  <label htmlFor="files" className="text-sm">File upload vulnerabilities</label>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleStartScan}
            className="bg-cyber-blue hover:bg-cyber-blue/90"
          >
            Start Scan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScanConfigModal;
