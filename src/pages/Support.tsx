import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Building,
  MessageSquare,
  Send,
  PhoneCall,
} from "lucide-react";
import ImportateurLayout from "@/components/layouts/ImportateurLayout";

const ContactInfo = ({ icon: Icon, title, value, link }: { icon: any; title: string; value: string; link?: string }) => (
  <div className="flex items-start gap-3">
    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950">
      <Icon className="w-5 h-5 text-indigo-600" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-base font-medium hover:text-indigo-600 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-base font-medium">{value}</p>
      )}
    </div>
  </div>
);

const Support = () => {
  return (
    <ImportateurLayout>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight mb-2">Contactez-nous</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question ou assistance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Envoyez-nous un message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nom</label>
                      <Input placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="votre@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sujet</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Question générale</SelectItem>
                        <SelectItem value="technical">Support technique</SelectItem>
                        <SelectItem value="commercial">Service commercial</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Votre message..." 
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Main Office */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">PORTNET S.A.</h3>
                <div className="space-y-4">
                  <ContactInfo 
                    icon={Building} 
                    title="Adresse"
                    value="Enceinte Portuaire, Bâtiment de la Capitainerie, 2ème étage, Port de Casablanca, 20000 Casablanca, Maroc"
                  />
                  <ContactInfo 
                    icon={Phone} 
                    title="Téléphone"
                    value="+212 520 473 102"
                    link="tel:+212520473102"
                  />
                  <ContactInfo 
                    icon={Phone} 
                    title="Fax"
                    value="+212 520 473 101"
                  />
                  <ContactInfo 
                    icon={Mail} 
                    title="Email"
                    value="contact@portnet.ma"
                    link="mailto:contact@portnet.ma"
                  />
                  <ContactInfo 
                    icon={Globe} 
                    title="Site web"
                    value="www.portnet.ma"
                    link="http://www.portnet.ma"
                  />
                </div>
              </Card>

              {/* Customer Service */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Centre de relation client</h3>
                <div className="space-y-4">
                  <ContactInfo 
                    icon={Globe} 
                    title="Site web"
                    value="reclamation.portnet.ma"
                    link="http://reclamation.portnet.ma"
                  />
                  <ContactInfo 
                    icon={PhoneCall} 
                    title="Téléphone"
                    value="+212 520 473 100"
                    link="tel:+212520473100"
                  />
                  <ContactInfo 
                    icon={MapPin} 
                    title="Adresse"
                    value="Maison des services du port de Casablanca"
                  />
                </div>
              </Card>

              {/* Sales */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Offres et services</h3>
                <div className="space-y-4">
                  <ContactInfo 
                    icon={Mail} 
                    title="Email"
                    value="sales@portnet.ma"
                    link="mailto:sales@portnet.ma"
                  />
                  <ContactInfo 
                    icon={Phone} 
                    title="Téléphone"
                    value="+212 520 473 102"
                    link="tel:+212520473102"
                  />
                </div>
              </Card>

              {/* Google Maps */}
              <Card className="p-6">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846508843305!2d-7.619495684797866!3d33.60896048072392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d282407396df%3A0x3488829b8de1c47!2sPortnet!5e0!3m2!1sfr!2sma!4v1647856436789!5m2!1sfr!2sma"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </ImportateurLayout>
  );
};

export default Support; 