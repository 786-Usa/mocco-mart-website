const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-5">

        {/* GRID ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold">Exclusive</h3>
            <p className="text-gray-400 mt-4">Subscribe</p>
            <p className="text-gray-400 text-sm mb-4">Get 10% off your first order</p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-900 text-sm outline-none placeholder-gray-500 rounded-l"
              />
              <button className="bg-red-600 px-4 py-2 rounded-r hover:bg-red-700 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>111 Bijoy Sarani, Dhaka</li>
              <li>DH 1515, Bangladesh</li>
              <li className="mt-3">exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Account</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Download App</h5>
            <p className="text-gray-400 text-sm mb-4">Save $3 with App for new users</p>

            <div className="flex gap-4 items-start">
              <img
                src="QR.jpg"
                alt="QR Code"
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex flex-col gap-2">
                <img
                  src="googlePlay.png"
                  alt="Google Play"
                  className="w-28"
                />
                <img
                  src="googlePlay.png"
                  alt="App Store"
                  className="w-28"
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-xl text-gray-300">
              <i className="bi bi-facebook hover:text-white cursor-pointer"></i>
              <i className="bi bi-instagram hover:text-white cursor-pointer"></i>
              <i className="bi bi-twitter hover:text-white cursor-pointer"></i>
              <i className="bi bi-youtube hover:text-white cursor-pointer"></i>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center text-gray-500 mt-10 pt-5 border-t border-gray-700 text-sm">
          © 2025 Exclusive. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
