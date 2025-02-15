import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Activity } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-slate-50 dark:from-background dark:to-slate-950">
      {/* Neon glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main rotating gradient */}
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 animate-rotate-slow" />
        </div>

        {/* Neon circles */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Moving particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: Math.random() * 0.5 + 0.5,
              scale: Math.random() * 1 + 0.5,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute w-1 h-1 bg-indigo-500/20 rounded-full"
          />
        ))}

        {/* Animated light beams */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-1 h-[100px] bg-gradient-to-b from-indigo-500/50 to-transparent blur-sm animate-meteor" />
          <div className="absolute top-0 left-2/3 w-1 h-[150px] bg-gradient-to-b from-purple-500/50 to-transparent blur-sm animate-meteor delay-500" />
          <div className="absolute top-0 right-1/4 w-1 h-[120px] bg-gradient-to-b from-blue-500/50 to-transparent blur-sm animate-meteor delay-1000" />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-block"
          >
            <div className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full text-indigo-600 dark:text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-shadow">
              <Shield className="w-4 h-4" />
              <span>Intelligent Fraud Detection System</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300 [text-shadow:0_0_30px_rgba(99,102,241,0.3)]"
            style={{ fontFamily: "'Cal Sans', 'Inter', sans-serif" }}
          >
            Advanced Protection
            <br />
            Against Fraud
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Secure your operations with our artificial intelligence system
            that detects and prevents fraudulent activities in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="text-lg h-12 px-8 gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg h-12 px-8 border-indigo-500/50 hover:border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-8 text-muted-foreground"
          >
            <div className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
              <Activity className="w-5 h-5 text-indigo-500" />
              <span>99.9% Accuracy</span>
            </div>
            <div className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
              <Shield className="w-5 h-5 text-indigo-500" />
              <span>24/7 Protection</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 