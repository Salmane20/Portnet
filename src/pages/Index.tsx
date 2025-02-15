import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default Index;
