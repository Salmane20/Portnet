import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Shield, 
  LineChart, 
  AlertCircle, 
  Zap,
  RefreshCw
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligence Artificielle Avancée",
    description: "Détection des fraudes en temps réel grâce à des algorithmes d'apprentissage automatique sophistiqués."
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Protection complète des transactions avec un système de sécurité multicouche."
  },
  {
    icon: LineChart,
    title: "Analyses Détaillées",
    description: "Tableaux de bord interactifs et rapports détaillés pour une vision claire de vos données."
  },
  {
    icon: AlertCircle,
    title: "Alertes Instantanées",
    description: "Notifications en temps réel pour toute activité suspecte détectée."
  },
  {
    icon: Zap,
    title: "Performance Optimale",
    description: "Traitement ultra-rapide des transactions sans compromettre la précision."
  },
  {
    icon: RefreshCw,
    title: "Adaptation Continue",
    description: "Système auto-apprenant qui s'améliore continuellement face aux nouvelles menaces."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Fonctionnalités Principales
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Des outils puissants pour une détection efficace des fraudes
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 dark:bg-slate-900 border-none">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 