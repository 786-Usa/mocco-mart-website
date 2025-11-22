import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

 function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Contact</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Call To Us */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Call To Us</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm font-medium">Phone: +8801611112222</p>
            </div>

            <hr className="border-gray-200" />

            {/* Write To Us */}
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Write To Us</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm mb-2">Emails: customer@exclusive.com</p>
              <p className="text-sm">Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-lg p-8">
              {/* Top Row - Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  className="w-full px-4 py-3 bg-gray-100 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-12 py-4 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition-colors duration-200 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
                  </>
  );
}

export default ContactPage;