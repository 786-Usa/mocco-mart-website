// ProductCard.jsx
import React from "react";

const ProductCard = ({ image, title, price, badge }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover sm:h-40 md:h-44 lg:h-48"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>

      <div className="p-3">
        <h4 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2">
          {title}
        </h4>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-red-600 font-semibold">{price}</div>
          <button
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
            aria-label={`Add ${title} to cart`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
