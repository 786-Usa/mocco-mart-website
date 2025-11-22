import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const LoginPage = () => {
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
            <h2 className="text-3xl font-bold text-center mb-2">
              Log in to Exclusive
            </h2>

            <p className="text-center text-gray-500 mb-6">
              Enter your details below
            </p>

            {/* FORM */}
            <form className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="border-0 border-b border-gray-300 focus:border-red-500 focus:ring-0 
                outline-none py-2"
              />

              <input
                type="password"
                placeholder="Password"
                className="border-0 border-b border-gray-300 focus:border-red-500 focus:ring-0 
                outline-none py-2"
              />

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg 
                transition-all duration-200 mt-3 font-semibold"
              >
                Login
              </button>

              <p className="text-center mt-1">
                <a
                  href="#"
                  className="text-red-600 font-semibold underline hover:text-red-700"
                >
                  Forget Password?
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LoginPage;
