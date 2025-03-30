'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
    <section>
      <Navbar />
    <main className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#050A44] mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we're revolutionizing image creation with cutting-edge AI technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              {/* Mission Section */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  We're on a mission to democratize creative expression through artificial intelligence. 
                  Our platform empowers artists, designers, and creative minds to bring their ideas to life 
                  instantly, without the traditional barriers of technical skills or expensive software.
                </p>
              </section>

              {/* Features Section */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-[#050A44] mb-2">Advanced AI Technology</h3>
                    <p className="text-gray-600">
                      Powered by state-of-the-art AI models that understand and interpret your creative vision.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-[#050A44] mb-2">Instant Generation</h3>
                    <p className="text-gray-600">
                      Transform your text descriptions into stunning visuals in seconds.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-[#050A44] mb-2">High-Quality Output</h3>
                    <p className="text-gray-600">
                      Generate high-resolution images suitable for various creative projects.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-[#050A44] mb-2">Easy Download</h3>
                    <p className="text-gray-600">
                      Download your generated images instantly in multiple formats.
                    </p>
                  </div>
                </div>
              </section>

              {/* How It Works Section */}
              <section>
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">How It Works</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#050A44] text-white rounded-full flex items-center justify-center mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#050A44] mb-1">Describe Your Vision</h3>
                      <p className="text-gray-600">
                        Enter a detailed description of the image you want to create.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#050A44] text-white rounded-full flex items-center justify-center mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#050A44] mb-1">AI Processing</h3>
                      <p className="text-gray-600">
                        Our AI model analyzes your description and generates a unique image.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#050A44] text-white rounded-full flex items-center justify-center mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#050A44] mb-1">Download & Share</h3>
                      <p className="text-gray-600">
                        Download your generated image or share it directly with others.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className="text-center">
                <h2 className="text-2xl font-semibold text-[#050A44] mb-4">Get Started Today</h2>
                <p className="text-gray-600 mb-6">
                  Ready to transform your ideas into stunning visuals? Start creating now!
                </p>
                <a
                  href="/"
                  className="inline-block bg-[#050A44] text-white px-6 py-3 rounded-md hover:bg-[#0A21C0] transition-colors duration-200"
                >
                  Start Creating
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </section>
  );
};

export default About;
