import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bot, Sparkles, ArrowLeft, HelpCircle, Upload } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImportateurLayout from "@/components/layouts/ImportateurLayout";
import { useState, useEffect } from "react";

const formFields = {
  "import-export": [
    { name: "countryImportExport", label: "Country of import/export", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "productHsCode", label: "Product (HS Code)", type: "text" },
    { name: "amount", label: "Amount", type: "number" },
    { name: "productDescription", label: "Product Description", type: "textarea" },
    { name: "quantity", label: "Quantity", type: "number" },
    { name: "weight", label: "Weight", type: "number" },
    { name: "tariffTax", label: "Tariff/Tax", type: "number" },
    { name: "transportMode", label: "Mode of transport", type: "select", options: ["Maritime", "Air", "Land"] },
    { name: "billOfLading", label: "Bill of Lading details", type: "textarea" },
    { name: "deliveryTime", label: "Delivery time", type: "date" },
    { name: "licenses", label: "Licenses", type: "file" },
    { name: "sanctionsCheck", label: "Sanctions list checks", type: "checkbox" },
    { name: "foodSafetyCerts", label: "Food safety certificates", type: "file" },
    { name: "tradeAgreement", label: "Trade Agreement", type: "text" },
    { name: "paymentMethod", label: "Payment method", type: "select", options: ["Letter of Credit", "Bank Transfer", "Cash"] },
    { name: "exporterName", label: "Exporter Name", type: "text" },
    { name: "importerName", label: "Importer Name", type: "text" },
    { name: "portEntryExit", label: "Port of Entry/Exit", type: "text" }
  ],
  "ministry": [
    { name: "companyName", label: "Nom ou raison sociale", type: "text" },
    { name: "rcNumber", label: "N° du registre du commerce", type: "text" },
    { name: "rcCenter", label: "Centre du registre du commerce", type: "text" },
    { name: "customsOffice", label: "Bureau de dedouanement", type: "text" },
    { name: "weight", label: "Poid", type: "number" },
    { name: "unit", label: "Unité", type: "text" },
    { name: "originCountry", label: "Pays d'origine", type: "text" },
    { name: "sourceCountry", label: "Pays de provenance", type: "text" },
    { name: "commercialDescription", label: "Désignation commerciale de la marchandise", type: "textarea" },
    { name: "customsNomenclature", label: "N° de la nomenclature douanière", type: "text" },
    { name: "importerSignature", label: "Cachet et signature de l'importateur", type: "file" },
    { name: "value", label: "Valeur", type: "number" },
    { name: "specialConditions", label: "Conditions spéciales", type: "textarea" },
    { name: "rcNum", label: "N° RC", type: "text" },
    { name: "totalAmountForeign", label: "Montant total en devises", type: "number" },
    { name: "finalDestination", label: "Destination finale du produit", type: "select", options: ["Vente", "Distribution", "Marché public"] },
    { name: "productBrand", label: "Marque du produit", type: "text" }
  ],
  "customs": [
    { name: "commercialInvoice", label: "Facture commerciale", type: "file" },
    { name: "bankCertificate", label: "Attestation bancaire", type: "file" },
    { name: "valueDetails", label: "Détail de la valeur par article", type: "textarea" },
    { name: "originCertificate", label: "Certificat d'origine", type: "file" },
    { name: "importTitle", label: "Titre d'importation", type: "file" },
    { name: "technicalControl", label: "Attestation de contrôle technique", type: "file" },
    { name: "transportDocs", label: "Titres de transport", type: "file" },
    { name: "packingList", label: "Liste de colisage", type: "file" },
    { name: "rcProof", label: "Justificatifs d'inscription au registre du commerce", type: "file" }
  ]
};

const FillForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formType, setFormType] = useState<string>("import-export");
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (location.state?.formType) {
      setFormType(location.state.formType);
    }
  }, [location.state]);

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case "text":
      case "number":
      case "date":
        return (
          <Input
            type={field.type}
            placeholder={`Enter ${field.label}`}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        );
      case "textarea":
        return (
          <Textarea
            placeholder={`Enter ${field.label}`}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        );
      case "select":
        return (
          <Select onValueChange={(value) => handleInputChange(field.name, value)}>
            <SelectTrigger>
              <SelectValue placeholder={`Select ${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option: string) => (
                <SelectItem key={option} value={option.toLowerCase()}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "file":
        return (
          <div className="flex items-center gap-2">
            <Input type="file" className="hidden" id={field.name} />
            <Button
              variant="outline"
              onClick={() => document.getElementById(field.name)?.click()}
              className="w-full"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload {field.label}
            </Button>
          </div>
        );
      case "checkbox":
        return (
          <div className="flex items-center gap-2">
            <Input
              type="checkbox"
              className="w-4 h-4"
              onChange={(e) => handleInputChange(field.name, e.target.checked)}
            />
            <span className="text-sm text-muted-foreground">Required</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ImportateurLayout>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/50 dark:to-background">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-4">
                <Link 
                  to="/documents" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Documents</span>
                </Link>
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-indigo-600" />
                  <h1 className="text-lg font-semibold">Form Assistant</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* AI Assistant Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/50 dark:to-purple-900/50 border-none">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Bot className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      AI Form Assistant
                      <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
                    </h2>
                    <p className="text-muted-foreground">
                      I'm here to help you fill out your forms accurately. I'll guide you through each field and provide real-time suggestions.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Form Fields */}
              <div className="md:col-span-2 space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    {formType === "import-export" && "Import/Export Declaration"}
                    {formType === "ministry" && "Ministère du Commerce et de l'Industrie"}
                    {formType === "customs" && "Documentation Douanière"}
                  </h3>
                  
                  <div className="space-y-4">
                    {formFields[formType as keyof typeof formFields].map((field, index) => (
                      <div key={index} className="space-y-2">
                        <Label>{field.label}</Label>
                        {renderField(field)}
                      </div>
                    ))}

                    <Button className="w-full">Submit Form</Button>
                  </div>
                </Card>
              </div>

              {/* AI Assistant Panel */}
              <div className="space-y-4">
                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-none">
                  <div className="flex items-center gap-2 mb-3">
                    <Bot className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium">AI Suggestions</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I'll provide real-time suggestions as you fill out the form.
                  </p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-medium">Need Help?</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Click on any field to get detailed guidance from the AI assistant.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate("/ai-chat")}
                  >
                    Ask AI Assistant
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ImportateurLayout>
  );
};

export default FillForm; 