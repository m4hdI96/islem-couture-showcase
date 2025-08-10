import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Index = () => {
  const { getTotalItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Cart Button */}
      <Dialog open={showCart} onOpenChange={setShowCart}>
        <DialogTrigger asChild>
          <Button
            className="fixed top-4 right-4 z-50 rounded-full w-14 h-14 shadow-lg"
            size="lg"
          >
            <ShoppingCart className="w-6 h-6" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-6 h-6 text-xs flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          <Cart />
        </DialogContent>
      </Dialog>

      <Hero />
      <ProductGrid />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
