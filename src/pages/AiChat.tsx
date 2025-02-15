import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, Sparkles, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { getGeminiResponse, validateGeminiConfig } from "@/services/gemini";
import { useToast } from "@/components/ui/use-toast";
import MessageContent from "@/components/MessageContent";

interface Message {
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
}

const AiChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "**Bonjour!** Je suis votre *Assistant IA* spécialisé dans les opérations d'importation. Comment puis-je vous aider aujourd'hui?\n\nJe peux vous assister avec :\n- Les procédures d'importation\n- La documentation requise\n- Les réglementations douanières\n- Le suivi des expéditions\n- Les tarifs et taxes\n- Les certifications et conformités",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigValid, setIsConfigValid] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Validate Gemini configuration on component mount
  useEffect(() => {
    const validateConfig = async () => {
      try {
        await validateGeminiConfig();
        setIsConfigValid(true);
      } catch (error) {
        console.error("Configuration error:", error);
        setIsConfigValid(false);
        toast({
          title: "Erreur de Configuration",
          description: "L'assistant IA n'est pas disponible pour le moment. Veuillez réessayer plus tard.",
          variant: "destructive",
        });
      }
    };
    validateConfig();
  }, [toast]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !isConfigValid) return;

    const userMessage: Message = {
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const aiResponse = await getGeminiResponse(inputMessage);
      
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      toast({
        title: "Erreur",
        description: "Désolé, je n'ai pas pu obtenir une réponse. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/importateur" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour</span>
              </Link>
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-600" />
                <h1 className="text-lg font-semibold">Assistant IA</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {!isConfigValid && (
          <Card className="p-4 mb-4 bg-red-50 border-red-200">
            <div className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              <p>L'assistant IA n'est pas disponible pour le moment. Veuillez vérifier la configuration.</p>
            </div>
          </Card>
        )}
        
        {/* Chat Messages */}
        <ScrollArea 
          className="h-[calc(100vh-12rem)] rounded-lg border bg-background/50 backdrop-blur-sm p-4"
          ref={scrollAreaRef}
        >
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 ${message.role === "assistant" ? "" : "flex-row-reverse"}`}
              >
                <div className={`p-2 rounded-full ${
                  message.role === "assistant" 
                    ? "bg-indigo-100" 
                    : "bg-purple-100"
                }`}>
                  {message.role === "assistant" ? (
                    <Bot className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <User className="w-5 h-5 text-purple-600" />
                  )}
                </div>
                <Card className={`p-4 max-w-[80%] ${
                  message.role === "assistant" 
                    ? "bg-background border-indigo-100" 
                    : "bg-purple-50 border-purple-100"
                }`}>
                  <MessageContent content={message.content} />
                  <time className="text-xs text-muted-foreground mt-2 block">
                    {message.timestamp.toLocaleTimeString()}
                  </time>
                </Card>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                L'IA réfléchit...
              </motion.div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="mt-4 flex gap-2">
          <Input
            placeholder="Tapez votre message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSendMessage()}
            className="bg-background"
            disabled={isLoading || !isConfigValid}
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            disabled={isLoading || !isConfigValid}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AiChat; 