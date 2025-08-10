import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import OrderDialog from '@/components/OrderDialog';

// Import dress images
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress5 from "@/assets/dress-5.jpg";
import dress6 from "@/assets/dress-6.jpg";
import dress7 from "@/assets/dress-7.jpg";
import dress8 from "@/assets/dress-8.jpg";
import dress1Gallery from "@/assets/dress-1-gallery.jpg";
import dress2Gallery from "@/assets/dress-2-gallery.jpg";

interface Product {
  id: number;
  image: string;
  gallery: string[];
  name: string;
  description: string;
  fullDescription: string;
  price: string;
  details: {
    material: string;
    sizes: string[];
    care: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    image: dress1,
    gallery: [dress1, dress1Gallery],
    name: "Robe Aurore",
    description: "Robe fluide en soie rose poudré, coupe élégante et intemporelle",
    fullDescription: "La Robe Aurore incarne l'élégance féminine avec sa coupe fluide et sa couleur rose poudré délicate. Confectionnée dans une soie de haute qualité, cette pièce unique allie confort et sophistication. Ses lignes épurées et son tombé parfait en font un choix idéal pour toutes les occasions spéciales.",
    price: "450 DT",
    details: {
      material: "100% Soie",
      sizes: ["XS", "S", "M", "L", "XL"],
      care: "Nettoyage à sec recommandé"
    }
  },
  {
    id: 2,
    image: dress2,
    gallery: [dress2, dress2Gallery],
    name: "Robe Céleste",
    description: "Robe de soirée en crêpe beige, drapé sophistiqué",
    fullDescription: "La Robe Céleste se distingue par son drapé sophistiqué et sa couleur beige intemporelle. Taillée dans un crêpe de luxe, elle épouse parfaitement les courbes tout en offrant une allure raffinée. Parfaite pour les événements élégants et les soirées chics.",
    price: "520 DT",
    details: {
      material: "Crêpe de luxe",
      sizes: ["XS", "S", "M", "L", "XL"],
      care: "Lavage délicat à 30°C"
    }
  },
  // ... other products would follow the same pattern
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || "1"));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
          <Link to="/">
            <Button variant="outline">Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const productData = {
    id: product.id,
    name: product.name,
    price: product.price
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-text-elegant transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour à la collection
        </Link>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.gallery.slice(1).map((img, index) => (
                <div key={index} className="aspect-[4/5] overflow-hidden rounded-lg">
                  <img 
                    src={img} 
                    alt={`${product.name} - vue ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-playfair text-4xl font-bold text-text-elegant mb-4">
                {product.name}
              </h1>
              <div className="font-playfair text-3xl font-bold text-accent mb-6">
                {product.price}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Product Details */}
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-playfair text-xl font-semibold text-text-elegant">
                  Détails du produit
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Matière : </span>
                    <span className="text-muted-foreground">{product.details.material}</span>
                  </div>
                  <div>
                    <span className="font-medium">Tailles disponibles : </span>
                    <div className="flex gap-2 mt-2">
                      {product.details.sizes.map(size => (
                        <Badge key={size} variant="secondary">{size}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Entretien : </span>
                    <span className="text-muted-foreground">{product.details.care}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Form */}
            <div className="space-y-4">
              <h3 className="font-playfair text-xl font-semibold text-text-elegant">
                Commander cette robe
              </h3>
              <OrderDialog product={productData}>
                <Button 
                  variant="elegant" 
                  size="lg" 
                  className="w-full justify-start gap-3"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Passer une commande
                </Button>
              </OrderDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
