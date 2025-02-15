import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 700 },
];

export const ActivityChart = () => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 dark:bg-slate-900/50 backdrop-blur-sm border-none shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.2)]">
      <h3 className="text-lg font-semibold mb-6">Activity Overview</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="name"
              className="text-muted-foreground text-xs"
              tickLine={false}
            />
            <YAxis
              className="text-muted-foreground text-xs"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                borderColor: "hsl(var(--border))",
              }}
              itemStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}; 