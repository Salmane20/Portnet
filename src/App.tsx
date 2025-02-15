import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import RoleSelection from "./pages/RoleSelection";
import Importateur from "./pages/Importateur";
import AiChat from "./pages/AiChat";
import Declarations from "./pages/Declarations";
import Documents from "./pages/Documents";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import FillForm from "@/pages/FillForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Routes>
            {/* Route de sélection de rôle */}
            <Route path="/" element={<RoleSelection />} />

            {/* Routes pour les utilisateurs Portnet */}
            <Route
              path="/*"
              element={
                <>
                  <Navbar />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/home" element={<Index />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/reports" element={<Reports />} />
                    </Routes>
                  </main>
                </>
              }
            />

            {/* Routes pour les importateurs */}
            <Route path="/importateur" element={<Importateur />} />
            <Route path="/ai-chat" element={<AiChat />} />
            <Route path="/declarations" element={<Declarations />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/support" element={<Support />} />
            <Route path="/fill-form" element={<FillForm />} />

            {/* Route 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
