'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContentSummarizer = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('en');

  const generateSummary = async () => {
    if (!text.trim()) {
      setError('Please enter text to summarize');
      return;
    }

    setIsLoading(true);
    setError('');
    setSummary('');

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
            lang: language,
            text: text
          })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to generate summary');
      }

      const data = await response.json();
      console.log('API Response:', data); // Debug log

      if (data && data.summary) {
        setSummary(data.summary);
      } else if (data && data.text) {
        setSummary(data.text);
      } else {
        setSummary('No summary available');
      }
    } catch (err) {
      setError('Failed to generate summary. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
  };

  const clearInputs = () => {
    setText('');
    setSummary('');
    setError('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#050A44] mb-4">
              Text Summarizer
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Paste your text and get a concise summary using AI technology.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Input Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="space-y-4">
                {/* Text Input */}
                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Text to Summarize
                  </label>
                  <textarea
                    id="text"
                    rows="10"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                    placeholder="Paste your text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>

                {/* Language Selection */}
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
                    Language
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
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
                    onClick={generateSummary}
                    disabled={isLoading || !text.trim()}
                    className={`flex-1 py-3 px-4 rounded-md text-white font-medium transition-colors duration-200
                      ${isLoading || !text.trim()
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#050A44] hover:bg-[#0A21C0]'
                      }`}
                  >
                    {isLoading ? 'Generating Summary...' : 'Generate Summary'}
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

            {/* Summary Section */}
            {summary && !isLoading && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-[#050A44]">Generated Summary</h2>
                  <button
                    onClick={handleCopy}
                    className="text-[#0A21C0] hover:text-[#050A44] font-medium flex items-center"
                  >
                    <i className="fas fa-copy mr-2"></i>
                    Copy
                  </button>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentSummarizer;