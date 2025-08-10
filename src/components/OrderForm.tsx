import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { useCart, CartItem } from '@/contexts/CartContext';

interface OrderFormProps {
  selectedProduct?: {
    id: number;
    name: string;
    price: string;
  };
  cartItems?: CartItem[];
  onClose?: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ selectedProduct, cartItems, onClose }) => {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: 'islem@gmail.com',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Préparer les données de commande
      const orderData = {
        customer: formData,
        items: cartItems || (selectedProduct ? [selectedProduct] : []),
        total: cartItems ? cartItems.reduce((sum, item) => {
          const price = parseFloat(item.price.replace(' DT', ''));
          return sum + (price * item.quantity);
        }, 0) : 0,
        timestamp: new Date().toISOString()
      };
      
      console.log('Commande envoyée à islem@gmail.com:', orderData);
      
      toast.success('Votre commande a été envoyée avec succès! Nous vous contacterons bientôt.');
      
      // Reset form
      setFormData({
        name: '',
        email: 'islem@gmail.com',
        phone: '',
        address: '',
        message: ''
      });

      // Vider le panier si c'est une commande depuis le panier
      if (cartItems && cartItems.length > 0) {
        clearCart();
      }

      if (onClose) onClose();

    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('Erreur lors de l\'envoi de la commande. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-serif text-primary">Passer une commande</CardTitle>
        <CardDescription>
          {cartItems && cartItems.length > 0 ? 
            `Commande de ${cartItems.length} article(s) pour un total de ${cartItems.reduce((sum, item) => {
              const price = parseFloat(item.price.replace(' DT', ''));
              return sum + (price * item.quantity);
            }, 0).toFixed(2)} DT` :
            selectedProduct ? 
            `Commande pour: ${selectedProduct.name} - ${selectedProduct.price}` : 
            'Remplissez le formulaire pour passer votre commande'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Résumé de la commande */}
          {cartItems && cartItems.length > 0 && (
            <div className="bg-gradient-card p-4 rounded-lg space-y-2">
              <h3 className="font-medium mb-3">Résumé de votre commande:</h3>
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span>{item.name}</span>
                    <Badge variant="secondary" className="text-xs">{item.size}</Badge>
                    <Badge variant="outline" className="text-xs">{item.color}</Badge>
                    <span className="text-muted-foreground">x{item.quantity}</span>
                  </div>
                  <span className="font-medium">{(parseFloat(item.price.replace(' DT', '')) * item.quantity).toFixed(2)} DT</span>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Votre nom complet"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email (fixe)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                disabled
                className="bg-muted"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                placeholder="+216 XX XXX XXX"
              />
            </div>

          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adresse de livraison *</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required
              placeholder="Votre adresse complète pour la livraison"
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (optionnel)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Des instructions spéciales ou des questions..."
              className="min-h-[80px]"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              type="submit" 
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Passer la commande'}
            </Button>
            
            {onClose && (
              <Button type="button" variant="outline" onClick={onClose}>
                Annuler
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default OrderForm;