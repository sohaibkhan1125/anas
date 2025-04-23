import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'AI Tools Hub',
  description: 'Your one-stop destination for powerful AI tools including image generation, text-to-speech, and content summarization.',
  keywords: ['AI tools', 'image generation', 'text to speech', 'content summarization', 'AI services'],
  verification: {
    google: 'oDaLN7DK2deaVZGO5lUgmHs34kq7MBQ-seWYJLgfank', // already in use
  },
  openGraph: {
    title: 'AI Tools Hub - Powerful AI Tools for Everyone',
    description: 'Access a suite of powerful AI tools including image generation, text-to-speech, and content summarization.',
    images: [
      {
        url: '/ai-tools-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Tools Hub Preview',
      },
    ],
  },
  twitter: {
    title: 'AI Tools Hub - Powerful AI Tools for Everyone',
    description: 'Access a suite of powerful AI tools including image generation, text-to-speech, and content summarization.',
    images: ['/ai-tools-preview.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="O2REvC1tC3LYBn9MOEmsJTy5AhCjtOityMvlqeIdkyg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
