import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Download,
  FileText,
  Info,
  Building2,
  Scale,
  ChevronDown,
  ChevronUp,
  Globe,
  Calendar,
  Package,
  DollarSign,
  FileCheck,
  Clock,
  Award,
  Ship,
  Anchor,
  MapPin,
  Building,
  Tag,
  Hash,
  Truck,
  ClipboardCheck,
  ListChecks,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Upload,
  ExternalLink,
  HelpCircle,
  Bot
} from "lucide-react";
import { useState } from "react";
import ImportateurLayout from "@/components/layouts/ImportateurLayout";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const documents = {
  aTraiter: [
    {
      id: "DOC-2024-001",
      nom: "Commercial Invoice",
      type: "Commercial Document",
      status: "Pending",
      date: "2024-03-15",
      taille: "1.2 MB",
    },
    {
      id: "DOC-2024-002",
      nom: "Bill of Lading",
      type: "Transport Document",
      status: "Pending",
      date: "2024-03-14",
      taille: "0.8 MB",
    },
  ],
  valides: [
    {
      id: "DOC-2024-003",
      nom: "Certificate of Origin",
      type: "Customs Document",
      status: "Validated",
      date: "2024-03-13",
      taille: "0.5 MB",
    },
    {
      id: "DOC-2024-004",
      nom: "Health Certificate",
      type: "Regulatory Document",
      status: "Validated",
      date: "2024-03-12",
      taille: "1.5 MB",
    },
  ],
  rejetes: [
    {
      id: "DOC-2024-005",
      nom: "Value Declaration",
      type: "Customs Document",
      status: "Rejected",
      date: "2024-03-11",
      taille: "0.3 MB",
      motif: "Incomplete document",
    },
  ],
};

const DocumentCard = ({ document }: { document: any }) => (
  <Card className="p-4 hover:shadow-md transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <File className="w-5 h-5 text-indigo-600" />
        <div>
          <span className="font-medium block">{document.nom}</span>
          <span className="text-sm text-muted-foreground">{document.id}</span>
        </div>
      </div>
      <StatusBadge status={document.status} />
    </div>
    <div className="space-y-2 text-sm text-muted-foreground">
      <div className="flex justify-between">
        <span>Type:</span>
        <span className="font-medium text-foreground">{document.type}</span>
      </div>
      <div className="flex justify-between">
        <span>Date:</span>
        <span className="font-medium text-foreground">{document.date}</span>
      </div>
      <div className="flex justify-between">
        <span>Taille:</span>
        <span className="font-medium text-foreground">{document.taille}</span>
      </div>
      {document.motif && (
        <div className="flex justify-between text-red-500">
          <span>Motif:</span>
          <span className="font-medium">{document.motif}</span>
        </div>
      )}
    </div>
    <div className="flex gap-2 mt-4">
      <Button className="flex-1 gap-2" variant="outline">
        Télécharger
        <Download className="w-4 h-4" />
      </Button>
      <Button className="flex-1 gap-2" variant="outline">
        Détails
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  </Card>
);

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Pending":
        return "bg-blue-100 text-blue-600";
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

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InfoCard = ({ title, icon: Icon, description }: { title: string; icon: any; description?: string }) => (
  <div className="p-4 bg-white rounded-lg border border-border/50 hover:shadow-md hover:border-indigo-500/20 transition-all duration-300 group">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <h4 className="font-medium text-sm group-hover:text-indigo-600 transition-colors">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  </div>
);

const Section = ({ title, icon, children }: SectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-border/50 hover:border-indigo-500/20 hover:shadow-md transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-300">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isExpanded ? "Click to collapse" : "Click to expand"}
            </p>
          </div>
        </div>
        <div className="text-muted-foreground group-hover:text-indigo-600 transition-colors">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-lg border border-border/50 p-6 shadow-sm"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const formTypes = [
  {
    id: "import-export",
    title: "Import/Export Declaration",
    description: "Complete declaration for import/export operations",
    fields: [
      "Country of import/export",
      "Date",
      "Product (HS Code)",
      "Amount",
      "Product Description",
      "Quantity",
      "Weight",
      "Tariff/Tax",
      "Mode of transport",
      "Bill of Lading details",
      "Delivery time",
      "Licenses",
      "Sanctions list checks",
      "Food safety certificates",
      "Trade Agreement",
      "Payment method",
      "Exporter Name",
      "Importer Name",
      "Port of Entry/Exit"
    ]
  },
  {
    id: "ministry",
    title: "Ministère du Commerce et de l'Industrie",
    description: "Déclaration pour le ministère du commerce",
    fields: [
      "Nom ou raison sociale",
      "N° du registre du commerce",
      "Centre du registre du commerce",
      "Bureau de dedouanement",
      "Poid",
      "Unité",
      "Pays d'origine",
      "Pays de provenance",
      "Désignation commerciale de la marchandise",
      "N° de la nomenclature douanière",
      "Cachet et signature de l'importateur",
      "Valeur",
      "Conditions spéciales",
      "N° RC",
      "Montant total en devises",
      "Destination finale du produit",
      "Marque du produit"
    ]
  },
  {
    id: "customs",
    title: "Douane",
    description: "Documentation douanière complète",
    fields: [
      "Facture commerciale",
      "Attestation bancaire",
      "Détail de la valeur par article",
      "Certificat d'origine",
      "Titre d'importation",
      "Attestation de contrôle technique",
      "Titres de transport",
      "Liste de colisage",
      "Justificatifs d'inscription au registre du commerce"
    ]
  }
];

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const filteredDocuments = {
    aTraiter: documents.aTraiter.filter(doc => 
      doc.nom.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedType === "all" || doc.type === selectedType)
    ),
    valides: documents.valides.filter(doc => 
      doc.nom.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedType === "all" || doc.type === selectedType)
    ),
    rejetes: documents.rejetes.filter(doc => 
      doc.nom.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedType === "all" || doc.type === selectedType)
    ),
  };

  const documentTypes = [
    "Commercial Document",
    "Transport Document",
    "Customs Document",
    "Regulatory Document",
  ];

  const guidedFormQuestions = [
    {
      step: 1,
      question: "What type of goods are you importing?",
      options: [
        "Consumer Goods",
        "Industrial Equipment",
        "Raw Materials",
        "Food Products",
        "Chemicals",
        "Other",
      ],
    },
    {
      step: 2,
      question: "What is your mode of transport?",
      options: [
        "Maritime",
        "Air",
        "Land",
        "Rail",
      ],
    },
    {
      step: 3,
      question: "What is the value of your goods?",
      options: [
        "Less than $10,000",
        "$10,000 - $50,000",
        "$50,000 - $100,000",
        "More than $100,000",
      ],
    },
  ];

  const generalInfoItems = [
    { title: "Import/Export Country", icon: Globe, description: "Country of origin and destination" },
    { title: "Date", icon: Calendar, description: "Import/Export date" },
    { title: "Product Description", icon: FileText, description: "Detailed product information" },
    { title: "Quantity", icon: Package, description: "Number of units" },
    { title: "Amount", icon: DollarSign, description: "Total transaction value" },
    { title: "Transport Mode", icon: Ship, description: "Method of transportation" },
    { title: "Port of Entry", icon: Anchor, description: "Port information" },
    { title: "Delivery Time", icon: Clock, description: "Expected delivery schedule" },
    { title: "Certificates", icon: Award, description: "Required certifications" }
  ];

  const ministryItems = [
    { title: "Company Name", icon: Building2, description: "Legal business name" },
    { title: "Trade Register", icon: FileText, description: "Registration details" },
    { title: "Location", icon: MapPin, description: "Business address" },
    { title: "Customs Office", icon: Building, description: "Clearance location" },
    { title: "Product Details", icon: Tag, description: "Product specifications" },
    { title: "Customs Code", icon: Hash, description: "Classification code" }
  ];

  const customsItems = [
    { title: "Commercial Invoice", icon: FileText, description: "Sale documentation" },
    { title: "Transport Documents", icon: Truck, description: "Shipping papers" },
    { title: "Technical Control", icon: ClipboardCheck, description: "Inspection reports" },
    { title: "Detailed List", icon: ListChecks, description: "Item breakdown" }
  ];

  return (
    <ImportateurLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Document Center</h1>
            <p className="text-muted-foreground">
              Fill out and manage your import documents with AI assistance
            </p>
          </div>

          {/* Form Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">Import Declaration</h2>
                  <p className="text-muted-foreground mb-4">
                    Fill out a new import declaration with step-by-step guidance
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        Start New Form
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Choose Form Type</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        {formTypes.map((form) => (
                          <Card 
                            key={form.id}
                            className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                            onClick={() => {
                              navigate("/fill-form", { state: { formType: form.id } });
                            }}
                          >
                            <h3 className="text-lg font-semibold mb-2">{form.title}</h3>
                            <p className="text-muted-foreground text-sm mb-3">{form.description}</p>
                            <div className="text-sm text-muted-foreground">
                              <strong>Fields include:</strong>
                              <ul className="mt-1 list-disc list-inside">
                                {form.fields.slice(0, 3).map((field, index) => (
                                  <li key={index}>{field}</li>
                                ))}
                                {form.fields.length > 3 && (
                                  <li>And {form.fields.length - 3} more fields...</li>
                                )}
                              </ul>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <Bot className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">AI Assistant</h2>
                  <p className="text-muted-foreground mb-4">
                    Get help with your documents from our AI assistant
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate("/ai-chat")}
                  >
                    Ask for Help
                    <Bot className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Recent Documents */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Documents</h3>
            <div className="space-y-4">
              {/* Add recent documents list here */}
              <Card className="p-4">
                <p className="text-muted-foreground text-center">
                  No recent documents found
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ImportateurLayout>
  );
};

export default Documents; 