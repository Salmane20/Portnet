import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  X,
  AlertTriangle,
  CheckCircle2,
  Info,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

// Sample notifications data
const notifications = [
  {
    id: 1,
    type: "alert",
    title: "High Risk Activity Detected",
    message: "Unusual transaction pattern detected in Account #12345",
    time: "2 minutes ago",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    id: 2,
    type: "success",
    title: "Threat Prevented",
    message: "Successfully blocked suspicious login attempt",
    time: "10 minutes ago",
    icon: CheckCircle2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    id: 3,
    type: "info",
    title: "System Update",
    message: "New fraud detection patterns have been added",
    time: "1 hour ago",
    icon: Info,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

export const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const markAllAsRead = () => {
    setUnreadCount(0);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950 dark:hover:text-indigo-400 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Notification Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-96 z-50 origin-top-right"
            >
              <div className="bg-background/80 backdrop-blur-lg border rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Notifications</h3>
                  <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={markAllAsRead}
                        className="text-sm hover:text-indigo-600"
                      >
                        Mark all as read
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <ScrollArea className="h-[400px]">
                  <div className="p-2">
                    {notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-lg hover:bg-muted/50 transition-colors mb-2 cursor-pointer group"
                      >
                        <div className="flex gap-4">
                          <div className={`${notification.bgColor} p-2 rounded-lg`}>
                            <notification.icon
                              className={`w-5 h-5 ${notification.color}`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {notification.title}
                              </h4>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {notification.time}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-3 border-t text-center">
                  <Button
                    variant="ghost"
                    className="text-sm text-muted-foreground hover:text-indigo-600"
                  >
                    View All Notifications
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}; 