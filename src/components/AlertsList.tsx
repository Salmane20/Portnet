
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

type Alert = {
  id: string;
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  timestamp: string;
};

const mockAlerts: Alert[] = [
  {
    id: "1",
    title: "Suspicious Document Pattern Detected",
    description: "Multiple similar invoices submitted within short timeframe",
    severity: "high",
    timestamp: "2 minutes ago"
  },
  {
    id: "2",
    title: "Weight Discrepancy Alert",
    description: "Declared weight differs from measured weight by 15%",
    severity: "medium",
    timestamp: "15 minutes ago"
  },
  {
    id: "3",
    title: "Routine Check Completed",
    description: "All documents verified successfully",
    severity: "low",
    timestamp: "1 hour ago"
  },
];

const severityIcons = {
  high: <AlertCircle className="h-4 w-4 text-risk-high" />,
  medium: <AlertTriangle className="h-4 w-4 text-risk-medium" />,
  low: <CheckCircle2 className="h-4 w-4 text-risk-low" />,
};

const severityColors = {
  high: "bg-risk-high/10 text-risk-high",
  medium: "bg-risk-medium/10 text-risk-medium",
  low: "bg-risk-low/10 text-risk-low",
};

export function AlertsList() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {mockAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start space-x-4 rounded-lg border p-4 transition-all hover:bg-accent/5"
              >
                <div className="mt-0.5">{severityIcons[alert.severity]}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{alert.title}</p>
                    <Badge
                      variant="secondary"
                      className={cn(severityColors[alert.severity])}
                    >
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {alert.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {alert.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
