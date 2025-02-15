import { motion } from "framer-motion";
import { Shield, Brain, Zap, Lock, BarChart, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "Real-time monitoring and protection against sophisticated fraud attempts using state-of-the-art technology."
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Machine learning algorithms that continuously adapt to new fraud patterns and threats."
  },
  {
    icon: Zap,
    title: "Instant Detection",
    description: "Lightning-fast detection and response to suspicious activities within milliseconds."
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security with end-to-end encryption and multi-layer protection."
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards and reports for deep insights into your security posture."
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock surveillance and immediate alerts for any suspicious activity."
  }
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/50 dark:to-purple-950/50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive fraud detection system combines cutting-edge technology with intuitive design to keep your business secure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10">
                <div className="mb-4 inline-block p-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 group-hover:bg-indigo-500/20 dark:group-hover:bg-indigo-400/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 