import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/maisonislemsalouma",
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/maisonislemsalouma",
      color: "hover:text-blue-500"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/33123456789",
      color: "hover:text-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-elegant mb-4">
            Contactez-nous
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Pour toute demande personnalisée ou commande spéciale, n'hésitez pas à nous écrire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-center">
                Écrivez-nous
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-inter font-medium">
                    Nom complet
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-primary/20 focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-inter font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-primary/20 focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="border-primary/20 focus:border-accent resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>
                
                <Button type="submit" variant="contact" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-center">
                  Suivez-nous
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center space-y-2 transition-colors ${social.color}`}
                    >
                      <div className="p-4 rounded-full bg-white shadow-button">
                        <social.icon size={24} />
                      </div>
                      <span className="font-inter text-sm font-medium">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-6 font-inter">
                  Passez commande directement via nos réseaux sociaux
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="font-playfair text-xl font-semibold mb-2">
                Horaires d'ouverture
              </h3>
              <div className="font-inter text-muted-foreground space-y-1">
                <p>Lundi - Vendredi: 9h00 - 18h00</p>
                <p>Samedi: 10h00 - 16h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;