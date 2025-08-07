import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, name, description, price }: ProductCardProps) => {
  const handleOrderClick = () => {
    const message = `Bonjour, je suis intéressée par la robe "${name}" au prix de ${price}. Pourriez-vous me donner plus d'informations ?`;
    const whatsappUrl = `https://wa.me/33123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-elegant transition-elegant bg-gradient-card border-0">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="p-6 text-center">
        <h3 className="font-playfair text-xl font-semibold mb-2 text-text-elegant">
          {name}
        </h3>
        <p className="font-inter text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="font-playfair text-2xl font-bold text-accent mb-4">
          {price}
        </div>
        <Button 
          variant="elegant" 
          size="lg" 
          className="w-full"
          onClick={handleOrderClick}
        >
          Commander via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;