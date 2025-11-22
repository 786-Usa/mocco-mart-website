import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Features from "../Components/Home/Features";

const OurStoryPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image (Hidden on Mobile) */}
        <div
          className="hidden lg:block bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center py-10 px-6">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-4">
             Our Story
            </h2>

            <p className="text-center text-gray-500 mb-6">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <div>
              <p className="text-center text-gray-500 mb-6">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Features />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default OurStoryPage;
