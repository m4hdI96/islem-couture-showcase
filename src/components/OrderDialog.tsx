import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import OrderForm from './OrderForm';

interface OrderDialogProps {
  product?: {
    id: number;
    name: string;
    price: string;
  };
  children: React.ReactNode;
}

const OrderDialog: React.FC<OrderDialogProps> = ({ product, children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <OrderForm 
          selectedProduct={product} 
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;