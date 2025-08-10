import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import OrderForm from './OrderForm';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, getTotalItems, getTotalPrice, clearCart } = useCart();
  const [showOrderForm, setShowOrderForm] = React.useState(false);

  if (items.length === 0) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="p-6 text-center">
          <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Votre panier est vide</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="font-serif text-primary flex items-center justify-between">
          Panier ({getTotalItems()})
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearCart}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={`${item.id}-${item.size}-${item.color}`}>
            <div className="flex gap-3">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 space-y-1">
                <h4 className="font-medium text-sm">{item.name}</h4>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">{item.size}</Badge>
                  <Badge variant="outline" className="text-xs">{item.color}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-accent">{item.price}</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {index < items.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
        
        <Separator />
        
        <div className="space-y-2">
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span className="text-accent">{getTotalPrice().toFixed(2)} DT</span>
          </div>
          
          <Dialog open={showOrderForm} onOpenChange={setShowOrderForm}>
            <DialogTrigger asChild>
              <Button className="w-full" size="lg">
                Passer la commande
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <OrderForm 
                cartItems={items}
                onClose={() => setShowOrderForm(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;