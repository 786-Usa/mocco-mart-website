// FlashSales.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const sampleProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1602524811439-7a9f9f3b2c9b?w=800&q=80&auto=format&fit=crop",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    badge: "New",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518444027083-6b3b1b28b7b2?w=800&q=80&auto=format&fit=crop",
    title: "Sony WH-1000XM4 Headphones",
    price: "$299",
    badge: "Hot",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80&auto=format&fit=crop",
    title: "RGB Liquid CPU Cooler",
    price: "$120",
    badge: "Sale",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80&auto=format&fit=crop",
    title: "Gaming Mouse",
    price: "$59",
    badge: "Limited",
  },
];

const getTimeParts = (sec) => {
  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor((sec % (3600 * 24)) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = Math.floor(sec % 60);
  return { days, hours, minutes, seconds };
};

const FlashSales = () => {
  // countdown to +3 days from now
  const target = Math.floor( Date.now() / 1000) + 3 * 24 * 3600 + 5 * 3600;
  const [remaining, setRemaining] = useState(target - Math.floor(Date.now() / 1000));

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes, seconds } = getTimeParts(remaining);

  return (
    <section className="max-w-7xl mx-auto px-5 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Flash Sales</h3>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-3 text-center">
            {[{ label: "Days", value: days }, { label: "Hours", value: hours }, { label: "Minutes", value: minutes }, { label: "Seconds", value: seconds }].map((t) => (
              <div key={t.label} className="bg-white p-3 rounded-md shadow w-20">
                <div className="text-sm text-gray-500">{t.label}</div>
                <div className="text-lg font-semibold text-gray-800">{String(t.value).padStart(2, "0")}</div>
              </div>
            ))}
          </div>
          <a href="#" className="text-red-600 font-semibold hover:underline">View all</a>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default FlashSales;
