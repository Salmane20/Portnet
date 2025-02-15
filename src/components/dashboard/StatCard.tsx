import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description: string;
  color: string;
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  description,
  color,
}: StatCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm border-none shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
          <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold mt-1 tracking-tight">
              {value}
            </h3>
            {trend && (
              <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {trend.isPositive ? '+' : '-'}{trend.value}%
              </span>
            )}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        {description}
      </p>
    </Card>
  );
}; 