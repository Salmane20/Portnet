import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Ship, Users } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400/20 via-background to-background">
      <div className="flex min-h-screen">
        {/* Left Side - Port Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block w-1/2 relative overflow-hidden"
        >
          <img 
            src="/port.jpg"
            alt="Port" 
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 px-4 py-8 flex items-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4">
                <img 
                  src="/logo.png" 
                  alt="Portnet Logo" 
                  className="h-24 w-auto mx-auto mb-6 animate-float"
                />
              </div>
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 tracking-tight relative">
                <span className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                  PORTNET
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="text-6xl md:text-7xl block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-text-shine relative"
                >
                  Fraud Gate
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-indigo-500/20 blur-2xl opacity-50 animate-pulse-slow" />
                </motion.span>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl opacity-50" />
              </h1>
              <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed mb-12">
                Your secure gateway for fraud prevention and detection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Importateur Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card
                  className="relative p-6 h-full hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden backdrop-blur-sm bg-background/80"
                  onClick={() => navigate("/importateur")}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 rounded-full bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500 ring-1 ring-indigo-500/20 group-hover:ring-indigo-500/40">
                        <Ship className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h2 className="font-heading text-2xl font-semibold group-hover:text-indigo-600 transition-colors duration-500">
                        Importer
                      </h2>
                    </div>
                    <p className="text-muted-foreground font-light mb-6 flex-grow">
                      Access our fraud prevention platform and manage your imports with enhanced security
                    </p>
                    <Button 
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-indigo-500/25"
                    >
                      Access Portal
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Administration Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card
                  className="relative p-6 h-full hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden backdrop-blur-sm bg-background/80"
                  onClick={() => navigate("/home")}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 rounded-full bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors duration-500 ring-1 ring-purple-500/20 group-hover:ring-purple-500/40">
                        <Users className="w-8 h-8 text-purple-600" />
                      </div>
                      <h2 className="font-heading text-2xl font-semibold group-hover:text-purple-600 transition-colors duration-500">
                        Administration
                      </h2>
                    </div>
                    <p className="text-muted-foreground font-light mb-6 flex-grow">
                      Manage port operations and monitor fraud detection systems from your dedicated space
                    </p>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-500 shadow-lg hover:shadow-purple-500/25"
                    >
                      Access Portal
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection; 