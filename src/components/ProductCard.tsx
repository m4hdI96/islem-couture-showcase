import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ProductOptions from './ProductOptions';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  sizes: string[];
  colors: string[];
}

const ProductCard = ({ id, image, name, description, price, sizes, colors }: ProductCardProps) => {
  const productData = {
    id,
    name,
    price,
    image,
    sizes,
    colors
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
        <div className="space-y-3">
          <Link to={`/product/${id}`} className="block">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
            >
              Voir les détails
            </Button>
          </Link>
          
          <ProductOptions 
            product={productData}
            availableSizes={sizes}
            availableColors={colors}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;