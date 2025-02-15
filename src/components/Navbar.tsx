import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Settings, User, BarChart3, FileText, Layout } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NotificationPopup } from "./NotificationPopup";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8 md:gap-10">
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-16 w-auto transform transition-all duration-300 group-hover:scale-105 animate-fade-in" 
            />
          </Link>
          <div className="hidden md:flex gap-6 animate-fade-in">
            <Link to="/home">
              <Button 
                variant="ghost" 
                className={cn(
                  "flex gap-2 items-center hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200",
                  location.pathname === "/home" && "bg-indigo-50 text-indigo-600"
                )}
              >
                <Layout className="h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                variant="ghost" 
                className={cn(
                  "flex gap-2 items-center hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200",
                  location.pathname === "/dashboard" && "bg-indigo-50 text-indigo-600"
                )}
              >
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link to="/reports">
              <Button 
                variant="ghost" 
                className={cn(
                  "flex gap-2 items-center hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200",
                  location.pathname === "/reports" && "bg-indigo-50 text-indigo-600"
                )}
              >
                <FileText className="h-4 w-4" />
                Reports
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 animate-fade-in">
          <NotificationPopup />
          <Button variant="ghost" size="icon" className="hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 ml-2">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 