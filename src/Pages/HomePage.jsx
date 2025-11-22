
import Footer from "../Components/Footer";
import ArrivalSection from "../Components/Home/ArrivalSection";
import Categories from "../Components/Home/Categories";
import Features from "../Components/Home/Features";
import FlashSales from "../Components/Home/FlashSales";
import HeroSection from "../Components/Home/HeroSection";
import ProductsShowcase from "../Components/Home/ProductsShowcase";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-6">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar (left) */}
            <aside className="hidden lg:block w-64">
              <div className="bg-white border rounded-lg p-4 sticky top-20">
                <h5 className="font-semibold mb-3">Categories</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-red-600">Fashion</a></li>
                  <li><a href="#" className="hover:text-red-600">Men</a></li>
                  <li><a href="#" className="hover:text-red-600">Women</a></li>
                  <li><a href="#" className="hover:text-red-600">Kids</a></li>
                  <li><a href="#" className="hover:text-red-600">Electronics</a></li>
                  <li><a href="#" className="hover:text-red-600">Home & Garden</a></li>
                </ul>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 space-y-8">
              <HeroSection />
              <FlashSales />
              <Categories />
              <ProductsShowcase title="Best Selling Products" />
              <section className="bg-black text-white rounded-lg overflow-hidden">
                {/* Music Experience / banner */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                  <div className="p-8">
                    <span className="text-green-400 font-semibold">Categories</span>
                    <h2 className="text-3xl font-bold mt-3">Enhance Your Music Experience</h2>
                    <div className="mt-4 flex gap-3">
                      <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                        <div className="text-lg font-bold">23</div>
                        <div className="text-xs">hours</div>
                      </div>
                      <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                        <div className="text-lg font-bold">5</div>
                        <div className="text-xs">Days</div>
                      </div>
                      <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                        <div className="text-lg font-bold">59</div>
                        <div className="text-xs">Minutes</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a href="#" className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold">Buy Now!</a>
                    </div>
                  </div>

                  <div className="p-6 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&q=80&auto=format&fit=crop"
                      alt="headphones"
                      className="w-full max-w-md object-cover"
                    />
                  </div>
                </div>
              </section>

              <ProductsShowcase title="Explore Our Products" />
              <ProductsShowcase title="More Products" />
              <ArrivalSection />
              <Features />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
