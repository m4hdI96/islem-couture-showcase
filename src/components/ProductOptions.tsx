import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductOptionsProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  availableSizes: string[];
  availableColors: string[];
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ product, availableSizes, availableColors }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Veuillez sélectionner une taille et une couleur');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor
    });

    toast.success(`${product.name} ajouté au panier!`);
    setSelectedSize('');
    setSelectedColor('');
  };

  return (
    <div className="space-y-4 p-4 bg-gradient-card rounded-lg border-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="size">Taille *</Label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez une taille" />
            </SelectTrigger>
            <SelectContent>
              {availableSizes.map(size => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="color">Couleur *</Label>
          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez une couleur" />
            </SelectTrigger>
            <SelectContent>
              {availableColors.map(color => (
                <SelectItem key={color} value={color}>{color}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        onClick={handleAddToCart}
        className="w-full"
        size="lg"
      >
        <ShoppingBag className="w-4 h-4 mr-2" />
        Ajouter au panier
      </Button>
    </div>
  );
};

export default ProductOptions;