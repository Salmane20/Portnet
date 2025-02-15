import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground max-w-xs">
              Advanced fraud detection system powered by artificial intelligence to protect your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-500 transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-500 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Connect With Us</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-indigo-50 hover:text-indigo-500 transition-colors">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-indigo-50 hover:text-indigo-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-indigo-50 hover:text-indigo-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-indigo-50 hover:text-indigo-500 transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} PORTNET S.A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 