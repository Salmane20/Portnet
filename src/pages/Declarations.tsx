import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Upload,
  ScanLine,
  Shield,
  Info
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ImportateurLayout from "@/components/layouts/ImportateurLayout";

const declarations = {
  validated: [
    {
      id: "DEC-2024-003",
      type: "Maritime Import",
      status: "Validated",
      date: "2024-03-13",
      priority: "Normal",
      details: "Standard import declaration - All documents verified"
    },
    {
      id: "DEC-2024-004",
      type: "Maritime Import",
      status: "Validated",
      date: "2024-03-12",
      priority: "High",
      details: "Priority shipment - Fast-track verification completed"
    },
  ],
  fraudSuspected: [
    {
      id: "DEC-2024-005",
      type: "Maritime Import",
      status: "Fraud Suspected",
      date: "2024-03-11",
      priority: "High",
      reason: "Anomaly detected in documentation",
      details: "Inconsistencies found in shipping manifests"
    },
  ],
};

const DeclarationCard = ({ declaration }: { declaration: any }) => (
  <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900">
          <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <span className="font-medium text-lg">{declaration.id}</span>
          <StatusBadge status={declaration.status} />
        </div>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Info className="w-5 h-5 text-muted-foreground hover:text-indigo-600 transition-colors" />
          </TooltipTrigger>
          <TooltipContent>
            <p>{declaration.details}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
    <div className="space-y-3 text-sm">
      <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
        <span className="text-muted-foreground">Type:</span>
        <span className="font-medium">{declaration.type}</span>
      </div>
      <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
        <span className="text-muted-foreground">Date:</span>
        <span className="font-medium">{declaration.date}</span>
      </div>
      <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
        <span className="text-muted-foreground">Priority:</span>
        <span className={`font-medium px-2 py-1 rounded-full ${
          declaration.priority === "High" 
            ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400" 
            : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
        }`}>{declaration.priority}</span>
      </div>
      {declaration.reason && (
        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400">
          <p className="font-medium">Reason for Suspicion:</p>
          <p className="mt-1">{declaration.reason}</p>
        </div>
      )}
    </div>
    <Button className="w-full mt-4 gap-2" variant="outline">
      View Complete Details
      <ArrowRight className="w-4 h-4" />
    </Button>
  </Card>
);

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Validated":
        return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400";
      case "Fraud Suspected":
        return "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "Validated":
        return <CheckCircle2 className="w-4 h-4" />;
      case "Fraud Suspected":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full flex items-center gap-2 text-sm ml-2 ${getStatusStyles()}`}>
      {getStatusIcon()}
      {status}
    </span>
  );
};

const Declarations = () => {
  return (
    <ImportateurLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Declarations Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze and manage your import declarations with our advanced fraud detection system
            </p>
          </motion.div>

          {/* Document Actions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Card className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-none shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 text-center bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="p-4 rounded-full bg-indigo-100 dark:bg-indigo-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Upload Documents</h3>
                  <p className="text-muted-foreground mb-6">
                    Upload your documents for instant fraud analysis
                  </p>
                  <Button className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Upload className="w-4 h-4" />
                    Upload Files
                  </Button>
                </div>
                <div className="p-6 text-center bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <ScanLine className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Scan Documents</h3>
                  <p className="text-muted-foreground mb-6">
                    Scan your documents for quick verification
                  </p>
                  <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    <ScanLine className="w-4 h-4" />
                    Start Scanning
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <Select defaultValue="maritime">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Declaration Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maritime">Maritime Import</SelectItem>
                <SelectItem value="air">Air Import</SelectItem>
                <SelectItem value="land">Land Import</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </Button>

            <Button variant="outline" className="gap-2">
              <Search className="w-4 h-4" />
              Search
            </Button>

            <Button variant="outline" className="gap-2 ml-auto">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Validated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-green-50/50 dark:bg-green-900/20 p-6 rounded-xl backdrop-blur-sm">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  Validated Declarations
                  <span className="ml-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm">
                    {declarations.validated.length}
                  </span>
                </h2>
                <div className="space-y-6">
                  {declarations.validated.map((declaration) => (
                    <DeclarationCard key={declaration.id} declaration={declaration} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Fraud Suspected */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-red-50/50 dark:bg-red-900/20 p-6 rounded-xl backdrop-blur-sm">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                  Fraud Suspected
                  <span className="ml-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-sm">
                    {declarations.fraudSuspected.length}
                  </span>
                </h2>
                <div className="space-y-6">
                  {declarations.fraudSuspected.map((declaration) => (
                    <DeclarationCard key={declaration.id} declaration={declaration} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </ImportateurLayout>
  );
};

export default Declarations; 