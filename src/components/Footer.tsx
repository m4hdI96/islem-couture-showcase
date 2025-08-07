import { Instagram, Facebook, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
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
    <footer className="bg-text-elegant text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Maison Islem Salouma
            </h3>
            <p className="font-inter text-gray-300 leading-relaxed">
              L'élégance façonnée, une robe à la fois. Créations haute couture 
              pour femmes raffinées.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Contact
            </h4>
            <div className="font-inter text-gray-300 space-y-2">
              <p>contact@maisonislemsalouma.com</p>
              <p>+33 1 23 45 67 89</p>
              <p>Paris, France</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Suivez-nous
            </h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-white/10 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="font-inter text-gray-300 text-sm">
              Commandez via nos réseaux sociaux
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-inter text-gray-300 text-sm">
              © {new Date().getFullYear()} Maison Islem Salouma. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-4 font-inter text-gray-300 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                À propos
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="font-inter text-gray-400 text-xs flex items-center justify-center">
              Créé avec <Heart size={12} className="mx-1 text-rose-powder" /> en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;