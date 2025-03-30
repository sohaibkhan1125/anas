'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section>
        <Navbar />
    <main className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#050A44] mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with us today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#050A44] mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#050A44] text-white rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#050A44] mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 AI Street<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#050A44] text-white rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#050A44] mb-1">Email</h3>
                      <p className="text-gray-600">
                        support@aiimagegenerator.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#050A44] text-white rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#050A44] mb-1">Phone</h3>
                      <p className="text-gray-600">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#050A44] text-white rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#050A44] mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <h3 className="text-lg font-medium text-[#050A44] mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#050A44] hover:text-[#0A21C0]">
                      <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="#" className="text-[#050A44] hover:text-[#0A21C0]">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="text-[#050A44] hover:text-[#0A21C0]">
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" className="text-[#050A44] hover:text-[#0A21C0]">
                      <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                      placeholder="Message subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#050A44] text-white py-3 px-4 rounded-md hover:bg-[#0A21C0] transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </section>
  );
};

export default Contact;
