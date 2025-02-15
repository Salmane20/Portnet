import { motion } from "framer-motion";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { AlertsList } from "@/components/AlertsList";
import { RiskMap } from "@/components/RiskMap";
import {
  Activity,
  AlertCircle,
  BarChart3,
  Clock,
  Shield,
  Users,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and analyze your fraud detection metrics
          </p>
        </motion.div>

        <div className="grid gap-6">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <StatCard
              title="Detection Rate"
              value="99.8%"
              icon={Shield}
              trend={{ value: 2.5, isPositive: true }}
              description="Overall fraud detection accuracy"
              color="bg-indigo-500"
            />
            <StatCard
              title="Active Users"
              value="2,834"
              icon={Users}
              trend={{ value: 12, isPositive: true }}
              description="Users currently monitoring"
              color="bg-purple-500"
            />
            <StatCard
              title="Alerts Today"
              value="147"
              icon={AlertCircle}
              trend={{ value: 8, isPositive: false }}
              description="Suspicious activities detected"
              color="bg-red-500"
            />
            <StatCard
              title="Response Time"
              value="1.2s"
              icon={Clock}
              trend={{ value: 15, isPositive: true }}
              description="Average alert response time"
              color="bg-green-500"
            />
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ActivityChart />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <RiskMap />
            </motion.div>
          </div>

          {/* Alerts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <AlertsList />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 