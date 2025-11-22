import React from 'react';
import { ShoppingCart, Trash2, Eye, Star } from 'lucide-react';

 function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      discount: '-35%',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      image: 'https://images.unsplash.com/photo-1592840062661-eac38d7d5d6e?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    }
  ];

  const justForYouItems = [
    {
      id: 1,
      name: 'ASUS FHD Gaming Laptop',
      price: 960,
      originalPrice: 1160,
      discount: '-35%',
      rating: 5,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      rating: 5,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      isNew: true,
      rating: 5,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'AK-900 Wired Keyboard',
      price: 200,
      rating: 5,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop'
    }
  ];

  const handleMoveAllToBag = () => {
    alert('Moving all items to bag!');
  };

  const handleDeleteItem = (id) => {
    console.log('Delete item:', id);
  };

  const handleAddToCart = (name) => {
    alert(`Added ${name} to cart!`);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <>
    
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Wishlist Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-medium">Wishlist ({wishlistItems.length})</h1>
          <button
            onClick={handleMoveAllToBag}
            className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Move All To Bag
          </button>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative bg-gray-100 rounded overflow-hidden mb-4">
                {/* Discount Badge */}
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                    {item.discount}
                  </span>
                )}
                
                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {/* Product Image */}
                <div className="aspect-square flex items-center justify-center p-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item.name)}
                  className="w-full bg-black text-white py-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm">Add To Cart</span>
                </button>
              </div>

              {/* Product Info */}
              <h3 className="font-medium mb-2">{item.name}</h3>
              <div className="flex items-center gap-3">
                <span className="text-red-500 font-medium">${item.price}</span>
                {item.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">${item.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Just For You Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 bg-red-500 rounded"></div>
              <h2 className="text-xl font-medium">Just For You</h2>
            </div>
            <button className="px-8 py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-sm font-medium">
              See All
            </button>
          </div>

          {/* Just For You Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {justForYouItems.map((item) => (
              <div key={item.id} className="group">
                <div className="relative bg-gray-100 rounded overflow-hidden mb-4">
                  {/* Discount or New Badge */}
                  {item.discount && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                      {item.discount}
                    </span>
                  )}
                  {item.isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
                      NEW
                    </span>
                  )}
                  
                  {/* Quick View Button */}
                  <button className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10">
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Product Image */}
                  <div className="aspect-square flex items-center justify-center p-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(item.name)}
                    className="w-full bg-black text-white py-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-sm">Add To Cart</span>
                  </button>
                </div>

                {/* Product Info */}
                <h3 className="font-medium mb-2">{item.name}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-red-500 font-medium">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">${item.originalPrice}</span>
                  )}
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-gray-500 text-sm">({item.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default WishlistPage;