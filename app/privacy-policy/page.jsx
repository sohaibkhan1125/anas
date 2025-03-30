'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen bg-gray-100 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#050A44] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At AI Image Generator, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you use our AI image generation service. Please read this 
                  privacy policy carefully. By using our service, you consent to the practices described in this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#050A44]">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Name and contact information (email address)</li>
                    <li>Account credentials</li>
                    <li>Payment information (processed securely through our payment providers)</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-lg font-medium text-[#050A44] mt-4">Usage Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Generated images and prompts</li>
                    <li>Usage patterns and preferences</li>
                    <li>Device and browser information</li>
                    <li>IP address and location data</li>
                  </ul>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To process your image generation requests</li>
                  <li>To improve and personalize your experience</li>
                  <li>To communicate with you about our service</li>
                  <li>To comply with legal obligations</li>
                  <li>To prevent fraud and enhance security</li>
                </ul>
              </section>

              {/* Data Storage and Security */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Data Storage and Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. 
                  However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Data Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data</li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our service is not intended for children under 13. We do not knowingly collect personal information from 
                  children under 13. If you are a parent or guardian and you are aware that your child has provided us with 
                  personal information, please contact us.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-2 text-gray-600">
                  <p>Email: privacy@aiimagegenerator.com</p>
                  <p>Address: 123 AI Street, Tech City, TC 12345, United States</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default PrivacyPolicy;
