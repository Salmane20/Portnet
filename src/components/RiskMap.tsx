
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RiskMap() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Risk Map</CardTitle>
      </CardHeader>
      <CardContent className="aspect-[16/9] relative bg-accent/5 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          Map visualization will be implemented in the next iteration
        </div>
      </CardContent>
    </Card>
  );
}
