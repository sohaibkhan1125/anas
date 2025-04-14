'use client';

import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <p className="text-xl text-gray-600 mb-12">
          We are dedicated to providing powerful AI tools that enhance productivity and creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to democratize access to advanced AI tools, making them available to everyone
            who wants to enhance their creativity and productivity. We believe in the power of
            technology to transform ideas into reality.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where AI tools are seamlessly integrated into everyday creative
            workflows, helping people achieve more with less effort and unlocking new possibilities
            for innovation.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Image Generation</h3>
            <p className="text-gray-600">
              Create stunning images from text descriptions using advanced AI technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Text to Speech</h3>
            <p className="text-gray-600">
              Convert text into natural-sounding speech with multiple voice options.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Summarization</h3>
            <p className="text-gray-600">
              Quickly summarize articles and content to save time and improve comprehension.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 