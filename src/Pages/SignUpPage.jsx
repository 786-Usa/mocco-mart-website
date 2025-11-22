import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const SignUpPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT IMAGE (Hidden on mobile) */}
        <div
          className="hidden lg:block bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop')",
          }}
        ></div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center py-10 px-6">
          <div className="w-full max-w-md">

            {/* Headings */}
            <h2 className="text-3xl font-bold text-center mb-2">
              Create an Account
            </h2>

            <p className="text-center text-gray-500 mb-6">
              Enter your details below
            </p>

            {/* FORM */}
            <form className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Name"
                className="border-0 border-b border-gray-300 focus:border-red-500 
                focus:ring-0 outline-none py-2"
              />

              <input
                type="email"
                placeholder="Email or Phone Number"
                className="border-0 border-b border-gray-300 focus:border-red-500 
                focus:ring-0 outline-none py-2"
              />

              <input
                type="password"
                placeholder="Password"
                className="border-0 border-b border-gray-300 focus:border-red-500 
                focus:ring-0 outline-none py-2"
              />

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg 
                transition-all duration-200 mt-1 font-semibold"
              >
                Create Account
              </button>

              {/* Google Button */}
              <button
                type="button"
                className="w-full border border-gray-400 text-gray-700 py-2 rounded-lg 
                flex items-center justify-center gap-2 hover:bg-gray-100 
                transition duration-200"
              >
                <i className="bi bi-google text-red-600 text-lg"></i>
                Sign up with Google
              </button>

              {/* Already have account */}
              <p className="text-center mt-2 text-gray-600">
                Already have an account?{" "}
                <a href="#" className="text-red-600 font-semibold hover:underline">
                  Login
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

export default SignUpPage;
