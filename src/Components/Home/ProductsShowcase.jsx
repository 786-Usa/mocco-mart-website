// ProductsShowcase.jsx
import React from "react";
import ProductCard from "./ProductCard";

const sample = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555617117-08fda6d9a3b1?w=800&q=80&auto=format&fit=crop",
    title: "ASUS FHD Gaming Laptop",
    price: "$1200",
    badge: "New",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be54a77?w=800&q=80&auto=format&fit=crop",
    title: "CANON EOS DSLR Camera",
    price: "$499",
    badge: "Hot",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513708928677-2ad23f6b6b6f?w=800&q=80&auto=format&fit=crop",
    title: "Curology Product Set",
    price: "$599",
    badge: "Limited",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&auto=format&fit=crop",
    title: "Sony WH-1000XM4 Headphones",
    price: "$299",
    badge: "Sale",
  },
];

const ProductsShowcase = ({ title = "Best Selling Products", products = sample }) => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-8">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductsShowcase;
