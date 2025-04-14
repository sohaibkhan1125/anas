import { Metadata } from 'next';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team. We\'re here to help you with any questions about our AI tools and services.',
  keywords: ['contact us', 'support', 'help', 'AI tools support', 'customer service'],
  openGraph: {
    title: 'Contact Us - AI Tools Hub',
    description: 'Reach out to our team for support, questions, or feedback about our AI tools and services.',
    images: [
      {
        url: '/contact-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact AI Tools Hub',
      },
    ],
  },
  twitter: {
    title: 'Contact Us - AI Tools Hub',
    description: 'Reach out to our team for support, questions, or feedback about our AI tools.',
    images: ['/contact-preview.jpg'],
  },
};

export default function Layout({ children }) {
  return children;
} 