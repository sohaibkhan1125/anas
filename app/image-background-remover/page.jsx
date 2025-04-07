'use client';

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImageBackgroundRemover = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size should be less than 10MB');
      return;
    }

    setImage(file);
    setError('');
    setProcessedImage(null);
    
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeBackground = async () => {
    if (!image) {
      setError('Please upload an image first');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('image_file', image);
      formData.append('size', 'auto');

      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'rBu7ujR5Pfs8Sz4Ys2mkP1Kq',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to remove background');
      }

      const blob = await response.blob();
      const processedImageUrl = URL.createObjectURL(blob);
      setProcessedImage(processedImageUrl);
    } catch (err) {
      setError('Failed to remove background. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'background-removed.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearInputs = () => {
    setImage(null);
    setProcessedImage(null);
    setPreviewUrl('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#050A44] mb-4">
              Image Background Remover
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upload an image and remove its background with AI technology.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Input Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="space-y-4">
                {/* Image Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-h-64 mb-4 rounded-lg"
                      />
                    ) : (
                      <div className="text-gray-500">
                        <i className="fas fa-cloud-upload-alt text-4xl mb-2"></i>
                        <p>Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-400 mt-1">
                          PNG, JPG, JPEG (max. 10MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={clearInputs}
                    className="flex-1 cursor-pointer py-3 px-4 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium transition-colors duration-200"
                  >
                    Clear
                  </button>
                  <button
                    onClick={removeBackground}
                    disabled={isLoading || !image}
                    className={`flex-1 py-3 cursor-pointer px-4 rounded-md text-white font-medium transition-colors duration-200
                      ${isLoading || !image
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#050A44] hover:bg-[#0A21C0]'
                      }`}
                  >
                    {isLoading ? 'Removing Background...' : 'Remove Background'}
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

            {/* Processed Image Section */}
            {processedImage && !isLoading && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-[#050A44]">Background Removed</h2>
                  <button
                    onClick={handleDownload}
                    className="text-[#0A21C0] cursor-pointer hover:text-[#050A44] font-medium flex items-center"
                  >
                    <i className="fas fa-download mr-2"></i>
                    Download
                  </button>
                </div>
                <div className="flex justify-center">
                  <img
                    src={processedImage}
                    alt="Background Removed"
                    className="max-h-96 rounded-lg"
                  />
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

export default ImageBackgroundRemover;
