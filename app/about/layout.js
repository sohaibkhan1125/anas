import { Metadata } from 'next';

export const metadata = {
  title: 'About Us',
  description: 'Learn about our mission to provide powerful AI tools that enhance productivity and creativity. Discover our story and the technology behind our platform.',
  keywords: ['about us', 'AI tools', 'company mission', 'technology', 'team'],
  openGraph: {
    title: 'About Us - Our Mission and Vision',
    description: 'Discover our journey in creating innovative AI tools that empower creativity and productivity.',
    images: [
      {
        url: '/about-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'About Us Preview',
      },
    ],
  },
  twitter: {
    title: 'About Us - Our Mission and Vision',
    description: 'Discover our journey in creating innovative AI tools that empower creativity and productivity.',
    images: ['/about-preview.jpg'],
  },
};

export default function Layout({ children }) {
  return children;
} 