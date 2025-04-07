'use client';

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('21m00Tcm4TlvDq8ikWAM'); // Default voice
  const audioRef = useRef(null);

  const voices = [
    { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel' },
    { id: 'AZnzlk1XvdvUeBnXmlld', name: 'Domi' },
    { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Bella' },
    { id: 'ErXwobaYiN019PkySvjV', name: 'Antoni' },
    { id: 'MF3mGyEYCl7XYWbV9V6O', name: 'Elli' },
    { id: 'TxGEqnHWrfWFTfGW9XjX', name: 'Josh' },
  ];

  const generateSpeech = async () => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }

    setIsLoading(true);
    setError('');
    setAudioUrl('');

    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${selectedVoice}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': 'sk_513800c601bca51783489a309aba62748ce414b8bbbebcbe'
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_monolingual_v1",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);

      // Automatically play the audio
      if (audioRef.current) {
        audioRef.current.play();
      }
    } catch (err) {
      setError('Failed to generate speech. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (audioUrl) {
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = `speech-${Date.now()}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section>
      <Navbar/>
    
    <main className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#050A44] mb-4">
            Text to Speech Converter
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Convert your text into natural-sounding speech using ElevenLabs' advanced TTS technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="space-y-4">
              {/* Voice Selection */}
              <div>
                <label htmlFor="voice" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Voice
                </label>
                <select
                  id="voice"
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                >
                  {voices.map((voice) => (
                    <option key={voice.id} value={voice.id}>
                      {voice.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Text Input */}
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Text
                </label>
                <textarea
                  id="text"
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A21C0] focus:border-transparent"
                  placeholder="Type or paste your text here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={generateSpeech}
                disabled={isLoading}
                className={`w-full py-3 px-4 cursor-pointer rounded-md text-white font-medium transition-colors duration-200
                  ${isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#050A44] hover:bg-[#0A21C0]'
                  }`}
              >
                {isLoading ? 'Generating...' : 'Generate Speech'}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-8">
              {error}
            </div>
          )}

          {/* Audio Player */}
          {audioUrl && !isLoading && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-[#050A44] mb-4">Generated Audio</h2>
              <audio ref={audioRef} controls className="w-full mb-4">
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => audioRef.current?.play()}
                  className="text-[#0A21C0] cursor-pointer hover:text-[#050A44] font-medium flex items-center"
                >
                  <i className="fas fa-play mr-2"></i>
                  Play
                </button>
                <button
                  onClick={handleDownload}
                  className="text-[#0A21C0] cursor-pointer hover:text-[#050A44] font-medium flex items-center"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Audio
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
    <Footer/>
    </section>
  );
};

export default TextToSpeech;
