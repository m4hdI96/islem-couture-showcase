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
    price: "450 DT"
  },
  {
    id: 2,
    image: dress2,
    name: "Robe Céleste",
    description: "Robe de soirée en crêpe beige, drapé sophistiqué",
    price: "520 DT"
  },
  {
    id: 3,
    image: dress3,
    name: "Robe Dorée",
    description: "Robe en soie dorée, brillance subtile et coupe moderne",
    price: "680 DT"
  },
  {
    id: 4,
    image: dress4,
    name: "Robe Pureté",
    description: "Robe minimaliste en crêpe blanc, lignes épurées",
    price: "420 DT"
  },
  {
    id: 5,
    image: dress5,
    name: "Robe Romance",
    description: "Robe romantique en mousseline rose, détails délicats",
    price: "490 DT"
  },
  {
    id: 6,
    image: dress6,
    name: "Robe Sophistiquée",
    description: "Robe de cocktail beige, élégance raffinée",
    price: "560 DT"
  },
  {
    id: 7,
    image: dress7,
    name: "Robe Champagne",
    description: "Robe en satin champagne, éclat luxueux",
    price: "620 DT"
  },
  {
    id: 8,
    image: dress8,
    name: "Robe Poésie",
    description: "Robe en soie rose poudré, douceur et féminité",
    price: "510 DT"
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
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;