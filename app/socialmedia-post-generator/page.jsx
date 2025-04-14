'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SocialMediaPostGenerator = () => {
  const [platform, setPlatform] = useState('twitter');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generatePost = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic for your post');
      return;
    }

    setIsLoading(true);
    setError('');
    setPost('');

    try {
      const response = await fetch(
        'https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key': 'b9b276d0c1msh822603b0c726babp1e9c4djsn4fbc5f965e78',
            'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
          },
          body: JSON.stringify({
            lang: 'en',
            text: `Generate a ${tone} social media post for ${platform} about: ${topic}`
          })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to generate post');
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data && data.summary) {
        setPost(data.summary);
      } else if (data && data.text) {
        setPost(data.text);
      } else {
        setPost('No post generated');
      }
    } catch (err) {
      setError('Failed to generate post. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(post);
  };

  const clearInputs = () => {
    setTopic('');
    setPost('');
    setError('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#050A44] mb-4">
              Social Media Post Generator
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create engaging social media posts for different platforms with AI assistance.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Input Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="space-y-4">
                {/* Platform Selection */}
                <div>
                  <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
                    Social Media Platform
                  </label>
                  <select
                    id="platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                  >
                    <option value="twitter">Twitter</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="tiktok">TikTok</option>
                  </select>
                </div>

                {/* Topic Input */}
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                    Post Topic
                  </label>
                  <textarea
                    id="topic"
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                    placeholder="What would you like to post about?"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>

                {/* Tone Selection */}
                <div>
                  <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
                    Post Tone
                  </label>
                  <select
                    id="tone"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                  >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="friendly">Friendly</option>
                    <option value="humorous">Humorous</option>
                    <option value="inspirational">Inspirational</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={clearInputs}
                    className="flex-1 py-3 px-4 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium transition-colors duration-200"
                  >
                    Clear
                  </button>
                  <button
                    onClick={generatePost}
                    disabled={isLoading || !topic.trim()}
                    className={`flex-1 py-3 px-4 rounded-md text-white font-medium transition-colors duration-200
                      ${isLoading || !topic.trim()
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#050A44] hover:bg-[#0A21C0]'
                      }`}
                  >
                    {isLoading ? 'Generating Post...' : 'Generate Post'}
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-8">
                {error}
              </div>
            )}

            {/* Generated Post Section */}
            {post && !isLoading && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-[#050A44]">Generated Post</h2>
                  <button
                    onClick={handleCopy}
                    className="text-[#0A21C0] hover:text-[#050A44] font-medium flex items-center"
                  >
                    <i className="fas fa-copy mr-2"></i>
                    Copy
                  </button>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap">{post}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default SocialMediaPostGenerator;
