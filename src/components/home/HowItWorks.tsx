import { motion } from "framer-motion";
import { Activity, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Our system continuously monitors all transactions and activities in real-time, analyzing patterns and behaviors."
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description: "Advanced AI algorithms identify suspicious patterns and potential fraud attempts instantly."
  },
  {
    icon: CheckCircle2,
    title: "Smart Response",
    description: "Automated responses are triggered to prevent fraud while legitimate transactions proceed smoothly."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent system works seamlessly to protect your business through a sophisticated three-step process.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 group-hover:bg-indigo-500/20 dark:group-hover:bg-indigo-400/20 transition-colors">
                    <step.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 