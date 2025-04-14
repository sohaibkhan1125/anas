import { Metadata } from 'next';
import Main from './components/Main';

export const metadata = {
  title: 'AI Image Generator',
  description: 'Create stunning AI-generated images with our advanced image generation tool. Transform your ideas into visual art with cutting-edge AI technology.',
  keywords: ['AI image generator', 'AI art', 'image creation', 'AI technology', 'art generation'],
  openGraph: {
    title: 'AI Image Generator - Create Stunning AI Art',
    description: 'Transform your ideas into visual art with our advanced AI image generation tool. Create unique, high-quality images instantly.',
    images: [
      {
        url: '/ai-image-generator-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Image Generator Preview',
      },
    ],
  },
  twitter: {
    title: 'AI Image Generator - Create Stunning AI Art',
    description: 'Transform your ideas into visual art with our advanced AI image generation tool.',
    images: ['/ai-image-generator-preview.jpg'],
  },
};

export default function Home() {
  return <Main />;
} 