import ProductCard from "./ProductCard";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress5 from "@/assets/dress-5.jpg";
import dress6 from "@/assets/dress-6.jpg";
import dress7 from "@/assets/dress-7.jpg";
import dress8 from "@/assets/dress-8.jpg";

const products = [
  {
    id: 1,
    image: dress1,
    name: "Robe Aurore",
    description: "Robe fluide en soie rose poudré, coupe élégante et intemporelle",
    price: "450 DT",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Rose Poudré", "Blanc Cassé", "Beige"]
  },
  {
    id: 2,
    image: dress2,
    name: "Robe Céleste",
    description: "Robe de soirée en crêpe beige, drapé sophistiqué",
    price: "520 DT",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Taupe", "Écru"]
  },
  {
    id: 3,
    image: dress3,
    name: "Robe Lumière",
    description: "Robe cocktail dorée, broderies délicates et finitions luxueuses",
    price: "680 DT",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Doré", "Champagne", "Bronze"]
  },
  {
    id: 4,
    image: dress4,
    name: "Robe Perle",
    description: "Robe longue nacrée, coupe sirène sublimant la silhouette",
    price: "750 DT",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Nacré", "Perle", "Blanc"]
  },
  {
    id: 5,
    image: dress5,
    name: "Robe Étoile",
    description: "Robe de gala scintillante, parfaite pour les grandes occasions",
    price: "850 DT",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Argent", "Platine", "Noir Étoilé"]
  },
  {
    id: 6,
    image: dress6,
    name: "Robe Camélia",
    description: "Robe romantique à volants, dentelle française délicate",
    price: "590 DT",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Rose Pâle", "Ivoire", "Nude"]
  },
  {
    id: 7,
    image: dress7,
    name: "Robe Jasmin",
    description: "Robe bohème chic, broderies florales artisanales",
    price: "480 DT",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanc", "Crème", "Lin"]
  },
  {
    id: 8,
    image: dress8,
    name: "Robe Opale",
    description: "Robe minimaliste chic, lignes épurées et tombé parfait",
    price: "420 DT",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Noir", "Marine", "Anthracite"]
  }
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-elegant mb-4">
            Notre Collection
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos créations uniques, façonnées avec passion et savoir-faire artisanal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard 
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                sizes={product.sizes}
                colors={product.colors}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;