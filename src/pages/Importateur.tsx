import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Ship, 
  ArrowRight,
  Package,
  Shield,
  Search,
  MessageSquareMore,
  Bot,
  AlertTriangle,
  Clock,
  FileCheck,
  Sparkles,
  Zap,
  MessageSquare
} from "lucide-react";
import ImportateurLayout from "@/components/layouts/ImportateurLayout";
import { useNavigate } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Importateur = () => {
  const navigate = useNavigate();

  return (
    <ImportateurLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/50 dark:to-background">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-rotate-glow" />
            <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-scale-pulse" />
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-scale-pulse delay-1000" />
          </div>
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-7xl font-bold mb-6 tracking-tight leading-tight"
              >
                Prevent{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Fraud
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl text-muted-foreground mb-12"
              >
                Secure your imports with our intelligent fraud prevention system
              </motion.p>

              {/* Decorative Arrows */}
              <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
                {/* Left Arrow */}
                <motion.svg
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute top-[70%] left-[15%] w-32 h-32 text-indigo-500/50"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M 90,50 H 10 M 10,50 L 30,30 M 10,50 L 30,70"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>

                {/* Middle Arrow */}
                <motion.svg
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  className="absolute top-[70%] left-[50%] -translate-x-1/2 w-32 h-32 text-indigo-500/50"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M 50,10 V 90 M 50,90 L 30,70 M 50,90 L 70,70"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>

                {/* Right Arrow */}
                <motion.svg
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  className="absolute top-[70%] right-[15%] w-32 h-32 text-indigo-500/50"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M 10,50 H 90 M 90,50 L 70,30 M 90,50 L 70,70"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Analyze Declaration Card */}
              <Card className="p-10 min-h-[500px] border-2 border-blue-400/50 hover:border-blue-500 transition-all duration-300 cursor-pointer group bg-white dark:bg-gray-900/50 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm">
                <div className="flex flex-col h-full relative">
                  <div className="flex items-center justify-between mb-10">
                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                      <FileText className="w-7 h-7 text-blue-500" />
                    </div>
                    <div className="text-sm font-medium text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      Online
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
                    Analyze Declarations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 flex-grow">
                    Analyze your documents to detect potential fraud risks using our advanced AI system
                  </p>
                  <div className="mt-auto pt-6 border-t border-blue-200/50 dark:border-blue-800/50">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-lg font-medium h-14"
                      onClick={() => navigate("/declarations")}
                    >
                      Start Analysis
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Fill Documents Card */}
              <Card className="p-10 min-h-[500px] border-2 border-blue-400/50 hover:border-blue-500 transition-all duration-300 cursor-pointer group bg-white dark:bg-gray-900/50 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm">
                <div className="flex flex-col h-full relative">
                  <div className="flex items-center justify-between mb-10">
                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                      <Bot className="w-7 h-7 text-blue-500" />
                    </div>
                    <div className="text-sm font-medium text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      AI Ready
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
                    Fill Documents
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 flex-grow">
                    Let our AI assistant help you fill out your forms with accuracy and avoid potential errors
                  </p>
                  <div className="mt-auto pt-6 border-t border-blue-200/50 dark:border-blue-800/50">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-lg font-medium h-14"
                      onClick={() => navigate("/documents")}
                    >
                      Start Filling
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* AI Assistant Card */}
              <Card className="p-10 min-h-[500px] border-2 border-blue-400/50 hover:border-blue-500 transition-all duration-300 cursor-pointer group bg-white dark:bg-gray-900/50 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] relative overflow-hidden backdrop-blur-sm">
                <div className="flex flex-col h-full relative">
                  <div className="flex items-center justify-between mb-10">
                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                      <MessageSquare className="w-7 h-7 text-blue-500" />
                    </div>
                    <div className="text-sm font-medium text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      Online
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
                    AI Assistant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 flex-grow">
                    Consult our AI chatbot specialized in imports in Morocco for all your questions
                  </p>
                  <div className="mt-auto pt-6 border-t border-blue-200/50 dark:border-blue-800/50">
                    <Button variant="outline" className="w-full justify-between text-lg font-medium h-14" onClick={() => navigate("/ai-chat")}>
                      Chat with AI
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/50 to-white dark:from-background dark:via-indigo-950/50 dark:to-background">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
          
          <div className="container relative mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 text-indigo-600 mb-4 animate-bounce-subtle">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Powered by AI
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-shimmer relative">
                Intelligent Assistant
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A virtual assistant available 24/7 to support you in all your procedures
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Fraud Prevention",
                  description: "Real-time detection of suspicious activities and risk analysis",
                  color: "blue",
                  delay: 0.1
                },
                {
                  icon: Ship,
                  title: "Port Activities",
                  description: "Intelligent tracking of operations and process optimization",
                  color: "indigo",
                  delay: 0.2
                },
                {
                  icon: FileCheck,
                  title: "Document Tracking",
                  description: "Automatic validation and compliance verification",
                  color: "purple",
                  delay: 0.3
                },
                {
                  icon: Clock,
                  title: "File Progress",
                  description: "Real-time updates and accurate estimates",
                  color: "pink",
                  delay: 0.4
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay }}
                  className="group"
                >
                  <Card className="relative h-full p-6 overflow-hidden backdrop-blur-sm hover:shadow-lg transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/10 dark:from-white/10 dark:to-white/5" />
                    <div className="relative">
                      <div className={`p-3 rounded-xl bg-${feature.color}-500/10 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className={`w-6 h-6 text-${feature.color}-500`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
          </div>
        </section>

        {/* Main Features Section with Enhanced Visuals */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50/30 dark:from-background dark:to-indigo-950/30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>
          
          <div className="container relative mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Main Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick access to our most used services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Ship,
                  title: "Maritime Import",
                  description: "Manage your maritime imports and track your containers",
                  color: "blue",
                },
                {
                  icon: Shield,
                  title: "Prior Verification",
                  description: "Validate your documents before submission",
                  color: "indigo",
                },
                {
                  icon: Search,
                  title: "Real-Time Tracking",
                  description: "Check the status of your declarations instantly",
                  color: "purple",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className={`p-3 rounded-xl bg-${feature.color}-500/10 w-fit mb-4 group-hover:bg-${feature.color}-500/20 transition-colors`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ImportateurLayout>
  );
};

export default Importateur; 