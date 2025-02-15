import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, FileCheck, History, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Importer = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400/20 via-background to-background">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <h1 className="font-heading text-4xl font-bold mb-6 tracking-tight">
            Fraud{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300">
              Prevention System
            </span>
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Our intelligent platform helps you secure your import operations
          </p>
        </motion.div>

        {/* Main Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: FileCheck,
              title: "New Declaration",
              description: "Initiate a new import declaration with ease",
              color: "green",
              delay: 0.1,
            },
            {
              icon: Shield,
              title: "Pre-Verification",
              description: "Validate your documents before submission",
              color: "indigo",
              delay: 0.2,
            },
            {
              icon: AlertTriangle,
              title: "Active Alerts",
              description: "Monitor and manage security alerts in real-time",
              color: "yellow",
              delay: 0.3,
            },
            {
              icon: History,
              title: "History",
              description: "View the complete history of your operations",
              color: "purple",
              delay: 0.4,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="h-full"
            >
              <Card className="relative h-full p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden backdrop-blur-sm bg-background/80">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-${item.color}-600 [mask-image:repeating-linear-gradient(45deg,#000_0px,#000_1px,transparent_1px,transparent_8px)]`} />
                </div>

                <div className="relative flex flex-col h-full">
                  <div className={`p-4 rounded-xl bg-${item.color}-500/5 group-hover:bg-${item.color}-500/10 transition-colors duration-500 mb-6 ring-1 ring-${item.color}-500/20 group-hover:ring-${item.color}-500/40 w-fit`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-500`} />
                  </div>
                  <h3 className={`font-heading text-xl font-semibold mb-3 group-hover:text-${item.color}-600 dark:group-hover:text-${item.color}-400 transition-colors duration-500`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className={`w-full group/btn hover:bg-${item.color}-500/10 hover:text-${item.color}-600`}
                  >
                    <span>Access</span>
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Status Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative rounded-2xl p-8 overflow-hidden backdrop-blur-sm bg-background/80"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 [mask-image:repeating-linear-gradient(45deg,#000_0px,#000_1px,transparent_1px,transparent_8px)]" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Active Declarations",
                value: "12",
                color: "text-indigo-600 dark:text-indigo-400",
              },
              {
                title: "Pending Alerts",
                value: "03",
                color: "text-yellow-500",
              },
              {
                title: "Trust Score",
                value: "98%",
                color: "text-green-500",
              },
            ].map((stat) => (
              <div key={stat.title} className="text-center">
                <p className="text-4xl font-bold mb-2 font-heading tracking-tight">
                  <span className={stat.color}>{stat.value}</span>
                </p>
                <h4 className="text-base font-medium text-muted-foreground">
                  {stat.title}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Importer; 