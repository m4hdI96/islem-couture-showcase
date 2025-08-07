import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGrid />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
