import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Activity, Users, Globe, Shield } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Analyzed Transactions",
    value: "10M+",
    icon: Activity,
    description: "Transactions analyzed daily",
    color: "text-blue-500"
  },
  {
    id: 2,
    name: "Active Users",
    value: "5,000+",
    icon: Users,
    description: "Companies using our platform",
    color: "text-purple-500"
  },
  {
    id: 3,
    name: "Global Coverage",
    value: "150+",
    icon: Globe,
    description: "Countries covered by our system",
    color: "text-green-500"
  },
  {
    id: 4,
    name: "Detection Rate",
    value: "99.9%",
    icon: Shield,
    description: "Fraud detection accuracy",
    color: "text-red-500"
  }
];

const StatsSection = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-opacity-10 ${stat.color.replace('text-', 'bg-')}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.name}
                    </p>
                    <h3 className="text-2xl font-bold mt-1 tracking-tight">
                      {stat.value}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 