import { Metadata } from 'next';

export const metadata = {
  title: 'Background Remover',
  description: 'Remove backgrounds from images instantly with our AI-powered background remover. Create professional transparent images in seconds.',
  keywords: ['background remover', 'image editing', 'transparent background', 'AI image processing', 'photo editing'],
  openGraph: {
    title: 'Background Remover - AI-Powered Image Editing Tool',
    description: 'Remove backgrounds from any image instantly with our advanced AI technology. Create professional transparent images for your projects.',
    images: [
      {
        url: '/background-remover-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Background Remover Preview',
      },
    ],
  },
  twitter: {
    title: 'Background Remover - AI-Powered Image Editing Tool',
    description: 'Remove backgrounds from any image instantly with our advanced AI technology.',
    images: ['/background-remover-preview.jpg'],
  },
};

export default function Layout({ children }) {
  return children;
} 