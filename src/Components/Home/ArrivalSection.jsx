// ArrivalSection.jsx
import React from "react";

const ArrivalSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left big */}
        <div className="relative rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606813904456-7d5f6b7d2f2a?w=1200&q=80&auto=format&fit=crop"
            alt="PlayStation 5"
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 p-6 rounded shadow">
            <h3 className="text-xl font-bold">PlayStation 5</h3>
            <p className="text-sm text-gray-700">Black and White version now on sale.</p>
            <div className="mt-3">
              <a href="#" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Shop Now</a>
            </div>
          </div>
        </div>

        {/* Right stack */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded overflow-hidden h-48">
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15cf4793a?w=1200&q=80&auto=format&fit=crop"
              alt="Women collections"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-bold">Women’s Collections</h4>
              <p className="text-sm">Featured woman collections that give you another vibe.</p>
              <a href="#" className="inline-block mt-2 text-sm bg-white/10 px-3 py-1 rounded">Shop Now</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded overflow-hidden h-40">
              <img
                src="https://images.unsplash.com/photo-1598300052766-9e0b6f2d6b6f?w=800&q=80&auto=format&fit=crop"
                alt="Speakers"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 text-white">
                <h5 className="text-sm font-bold">Speakers</h5>
                <p className="text-xs">Amazon wireless speakers</p>
                <a href="#" className="inline-block mt-1 text-xs bg-white/10 px-2 py-1 rounded">Shop</a>
              </div>
            </div>
            <div className="relative rounded overflow-hidden h-40">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80&auto=format&fit=crop"
                alt="Perfume"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 text-white">
                <h5 className="text-sm font-bold">Perfume</h5>
                <p className="text-xs">GUCCI INTENSE OUD EDP</p>
                <a href="#" className="inline-block mt-1 text-xs bg-white/10 px-2 py-1 rounded">Shop</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArrivalSection;
