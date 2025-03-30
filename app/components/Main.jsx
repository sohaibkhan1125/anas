'use client';

import { useState } from 'react';
import Image from 'next/image';

const Main = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for the image');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://ai-image-generator3.p.rapidapi.com/generate', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': 'cca330428dmsh4b459b029c77e3cp1a7504jsn8f61efbba564',
          'x-rapidapi-host': 'ai-image-generator3.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          page: 1
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      console.log('API Response:', data); // For debugging

      // Check if we have valid results
      if (!data || !data.results) {
        throw new Error('Invalid response from API');
      }

      // Get the first image from the images array
      if (data.results.images && data.results.images.length > 0) {
        setGeneratedImage(data.results.images[0]);
      } else {
        // Fallback to first URL from first variation if images array is empty
        if (data.results.variaties && data.results.variaties.length > 0 && 
            data.results.variaties[0].urls && data.results.variaties[0].urls.length > 0) {
          setGeneratedImage(data.results.variaties[0].urls[0]);
        } else {
          throw new Error('No images found in the response');
        }
      }
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error('Error details:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = () => {
    try {
      // Create a temporary link
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `generated-image-${Date.now()}.png`;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      // If direct download fails, open in new tab
      window.open(generatedImage, '_blank');
      console.error('Download Error:', err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#050A44] mb-4">
            AI Image Generator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your imagination into stunning visuals using advanced AI technology.
            Simply describe what you want to see, and watch as it comes to life.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your image
                </label>
                <textarea
                  id="prompt"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                  placeholder="Enter a detailed description of the image you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
              <button
                onClick={generateImage}
                disabled={isLoading}
                className={`w-full py-3 px-4 cursor-pointer rounded-md text-white font-medium transition-colors duration-200
                  ${isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#050A44] hover:bg-[#0A21C0]'
                  }`}
              >
                {isLoading ? 'Generating...' : 'Generate Image'}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-8">
              {error}
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#050A44]"></div>
            </div>
          )}

          {/* Generated Image */}
          {generatedImage && !isLoading && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-[#050A44] mb-4">Generated Image</h2>
              <div className="relative aspect-square w-96 rounded-lg h-96 mx-auto">
                <Image
                  src={generatedImage}
                  alt="Generated image"
                  fill
                  className="rounded-lg object-contain w-50 h-50 rounded-lg"
                  unoptimized
                />
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={generatedImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A21C0] hover:text-[#050A44] font-medium flex items-center"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  View Full Size
                </a>
                <button
                  onClick={downloadImage}
                  className="text-[#0A21C0] cursor-pointer hover:text-[#050A44] font-medium flex items-center"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
