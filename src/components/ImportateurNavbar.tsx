import { Button } from "@/components/ui/button";
import { MessageSquareMore, User, Bot, Sparkles, FileText, File, HelpCircle, Home } from "lucide-react";
import { NotificationPopup } from "./NotificationPopup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ImportateurNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="group transition-transform duration-200 hover:scale-105"
            >
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-14 w-auto" 
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/importateur">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "flex gap-2 items-center hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200",
                    location.pathname === "/importateur" && "bg-indigo-50 text-indigo-600"
                  )}
                >
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
              <Link to="/declarations">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "flex gap-2 items-center hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200",
                    location.pathname === "/declarations" && "bg-indigo-50 text-indigo-600"
                  )}
                >
                  <FileText className="h-4 w-4" />
                  Declarations
                </Button>
              </Link>
              <Link to="/documents">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "flex gap-2 items-center hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200",
                    location.pathname === "/documents" && "bg-indigo-50 text-indigo-600"
                  )}
                >
                  <File className="h-4 w-4" />
                  Documents
                </Button>
              </Link>
              <Link to="/support">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "flex gap-2 items-center hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200",
                    location.pathname === "/support" && "bg-indigo-50 text-indigo-600"
                  )}
                >
                  <HelpCircle className="h-4 w-4" />
                  Support
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <NotificationPopup />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative hidden md:block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Button 
                variant="outline" 
                className="relative flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border-indigo-500/20 hover:border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300"
                onClick={() => navigate("/ai-chat")}
              >
                <Bot className="h-4 w-4 text-indigo-600 animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI Assistant
                </span>
                <Sparkles className="h-3 w-3 text-purple-500 animate-bounce-subtle" />
              </Button>
            </motion.div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ImportateurNavbar; 