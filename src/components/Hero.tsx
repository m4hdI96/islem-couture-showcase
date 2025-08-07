import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Maison Islem Salouma
        </h1>
        <p className="font-inter text-xl md:text-2xl mb-8 font-light opacity-90 animate-fade-in">
          L'élégance façonnée, une robe à la fois.
        </p>
        <Button 
          variant="hero" 
          size="lg" 
          className="animate-fade-in"
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Découvrir la Collection
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-float">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;