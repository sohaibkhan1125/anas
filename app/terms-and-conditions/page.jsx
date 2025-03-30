'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen bg-gray-100 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#050A44] mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to AI Image Generator. By accessing and using our service, you agree to be bound by these Terms 
                  and Conditions. Please read them carefully before using our AI image generation service.
                </p>
              </section>

              {/* Definitions */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">2. Definitions</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>"Service" refers to the AI Image Generator platform</li>
                  <li>"User" refers to any individual or entity using our Service</li>
                  <li>"Content" refers to images, text, and other materials generated through our Service</li>
                  <li>"Terms" refers to these Terms and Conditions</li>
                </ul>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">3. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part 
                  of these Terms, you may not access the Service.
                </p>
              </section>

              {/* Service Description */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">4. Service Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  AI Image Generator provides an AI-powered platform that generates images based on text descriptions. 
                  The Service uses artificial intelligence to create unique visual content based on user input.
                </p>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">5. User Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Use the Service in compliance with applicable laws</li>
                  <li>Not use the Service for any illegal or unauthorized purpose</li>
                  <li>Not interfere with the proper working of the Service</li>
                </ul>
              </section>

              {/* Content Guidelines */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">6. Content Guidelines</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Users must not generate content that:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Contains hate speech or discriminatory content</li>
                  <li>Infringes on intellectual property rights</li>
                  <li>Contains explicit or inappropriate material</li>
                  <li>Promotes violence or illegal activities</li>
                  <li>Contains false or misleading information</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">7. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Service and its original content, features, and functionality are owned by AI Image Generator and 
                  are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws.
                </p>
              </section>

              {/* User-Generated Content */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">8. User-Generated Content</h2>
                <p className="text-gray-600 leading-relaxed">
                  Users retain rights to their input prompts. However, by using our Service, you grant us a license to 
                  use, store, and process your prompts to generate images. Generated images are subject to our usage 
                  terms and may not be used for commercial purposes without proper licensing.
                </p>
              </section>

              {/* Payment Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">9. Payment Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  Users agree to pay all fees associated with their use of the Service. Fees are non-refundable unless 
                  required by law. We reserve the right to modify our pricing with notice.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  AI Image Generator shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use of or inability to use the Service.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">11. Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to terminate or suspend your account and access to the Service at our sole 
                  discretion, without prior notice, for any violation of these Terms.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">12. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                  via email or through the Service.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">13. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-2 text-gray-600">
                  <p>Email: legal@aiimagegenerator.com</p>
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

export default TermsAndConditions;
