import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Search,
  Filter,
  Download,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImportateurLayout from "@/components/layouts/ImportateurLayout";

const declarations = {
  enCours: [
    {
      id: "DEC-2024-001",
      type: "Maritime Import",
      status: "Processing",
      date: "2024-03-15",
      priority: "High",
    },
    {
      id: "DEC-2024-002",
      type: "Maritime Import",
      status: "Pending",
      date: "2024-03-14",
      priority: "Normal",
    },
  ],
  validees: [
    {
      id: "DEC-2024-003",
      type: "Maritime Import",
      status: "Validated",
      date: "2024-03-13",
      priority: "Normal",
    },
    {
      id: "DEC-2024-004",
      type: "Maritime Import",
      status: "Validated",
      date: "2024-03-12",
      priority: "High",
    },
  ],
  rejetees: [
    {
      id: "DEC-2024-005",
      type: "Maritime Import",
      status: "Rejected",
      date: "2024-03-11",
      priority: "Normal",
    },
  ],
};

const DeclarationCard = ({ declaration }: { declaration: any }) => (
  <Card className="p-4 hover:shadow-md transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <FileText className="w-5 h-5 text-indigo-600" />
        <span className="font-medium">{declaration.id}</span>
      </div>
      <StatusBadge status={declaration.status} />
    </div>
    <div className="space-y-2 text-sm text-muted-foreground">
      <div className="flex justify-between">
        <span>Type:</span>
        <span className="font-medium text-foreground">{declaration.type}</span>
      </div>
      <div className="flex justify-between">
        <span>Date:</span>
        <span className="font-medium text-foreground">{declaration.date}</span>
      </div>
      <div className="flex justify-between">
        <span>Priority:</span>
        <span className={`font-medium ${
          declaration.priority === "High" ? "text-red-500" : "text-foreground"
        }`}>{declaration.priority}</span>
      </div>
    </div>
    <Button className="w-full mt-4 gap-2" variant="outline">
      View Details
      <ArrowRight className="w-4 h-4" />
    </Button>
  </Card>
);

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Processing":
        return "bg-blue-100 text-blue-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Validated":
        return "bg-green-100 text-green-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "Processing":
        return <Clock className="w-4 h-4" />;
      case "Pending":
        return <Clock className="w-4 h-4" />;
      case "Validated":
        return <CheckCircle2 className="w-4 h-4" />;
      case "Rejected":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full flex items-center gap-2 text-sm ${getStatusStyles()}`}>
      {getStatusIcon()}
      {status}
    </span>
  );
};

const Declarations = () => {
  return (
    <ImportateurLayout>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Declarations</h1>
            <p className="text-muted-foreground">
              Manage and track your import declarations
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Select defaultValue="maritime">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Declaration Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maritime">Maritime Import</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>

            <Button variant="outline" className="gap-2">
              <Search className="w-4 h-4" />
              Search
            </Button>

            <Button variant="outline" className="gap-2 ml-auto">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* In Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  In Progress
                  <span className="ml-2 px-2 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm">
                    {declarations.enCours.length}
                  </span>
                </h2>
                <div className="space-y-4">
                  {declarations.enCours.map((declaration) => (
                    <DeclarationCard key={declaration.id} declaration={declaration} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Validated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Validated
                  <span className="ml-2 px-2 py-1 rounded-full bg-green-100 text-green-600 text-sm">
                    {declarations.validees.length}
                  </span>
                </h2>
                <div className="space-y-4">
                  {declarations.validees.map((declaration) => (
                    <DeclarationCard key={declaration.id} declaration={declaration} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Rejected */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-red-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Rejected
                  <span className="ml-2 px-2 py-1 rounded-full bg-red-100 text-red-600 text-sm">
                    {declarations.rejetees.length}
                  </span>
                </h2>
                <div className="space-y-4">
                  {declarations.rejetees.map((declaration) => (
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