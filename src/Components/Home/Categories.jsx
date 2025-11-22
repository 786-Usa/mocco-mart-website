// Categories.jsx
import React from "react";

const categories = [
  { id: 1, label: "Mobile Phones", icon: "📱" },
  { id: 2, label: "Smart Watches", icon: "⌚" },
  { id: 3, label: "Laptops", icon: "💻" },
  { id: 4, label: "Headphones", icon: "🎧" },
  { id: 5, label: "Televisions", icon: "📺" },
  { id: 6, label: "Cameras", icon: "📷" },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Browse By Category</h3>
        <a href="#" className="text-red-600 font-semibold">View all</a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((c) => (
          <div key={c.id} className="bg-white rounded-lg border p-4 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-2xl mb-3">
              <span>{c.icon}</span>
            </div>
            <div className="text-sm font-medium text-gray-700">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
