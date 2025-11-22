import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const EditProfilePage = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex justify-between text-gray-600 text-sm mb-6">
          <p>Home / <span className="font-semibold text-gray-800">My Account</span></p>
          <p>Welcome! <span className="text-red-600 font-semibold">Md Rimel</span></p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white rounded shadow p-4">
            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h5 className="font-semibold mb-2">Manage My Account</h5>
                <ul className="space-y-1">
                  <li><a href="#" className="text-red-600">My Profile</a></li>
                  <li><a href="#" className="hover:text-gray-900">Address Book</a></li>
                  <li><a href="#" className="hover:text-gray-900">My Payment Options</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-2">My Orders</h5>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-gray-900">My Returns</a></li>
                  <li><a href="#" className="hover:text-gray-900">My Cancellations</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-2">My WishList</h5>
              </div>
            </div>
          </aside>

          {/* Edit Profile Form */}
          <section className="flex-1 bg-white rounded shadow p-6">
            <h3 className="text-red-600 font-semibold mb-6 text-lg">Edit Your Profile</h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  value="Md"
                  className="bg-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  readOnly
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  value="Rimel"
                  className="bg-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  readOnly
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value="rimel1111@gmail.com"
                  className="bg-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  readOnly
                />
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  value="Kingston, 5236, United State"
                  className="bg-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  readOnly
                />
              </div>

              {/* Password Changes - Full Width */}
              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm font-medium mb-1">Current Password</label>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="bg-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 mb-3"
                />
                <label className="text-sm font-medium mb-1">New Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  className="bg-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 mb-3"
                />
                <label className="text-sm font-medium mb-1">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="bg-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">Cancel</button>
              <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">Save Changes</button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EditProfilePage;
