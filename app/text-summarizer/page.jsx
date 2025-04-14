import { Metadata } from 'next';
import ContentSummarizer from './components/ContentSummarizer';

export const metadata = {
  title: 'Text Summarizer',
  description: 'Quickly summarize any text or article with our AI-powered text summarizer. Get concise, accurate summaries in seconds.',
  keywords: ['text summarizer', 'article summarizer', 'AI summarization', 'content summary', 'text analysis'],
  openGraph: {
    title: 'Text Summarizer - AI-Powered Content Summary Tool',
    description: 'Transform long articles into concise summaries with our advanced AI text summarizer. Save time and get the key points instantly.',
    images: [
      {
        url: '/text-summarizer-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Text Summarizer Preview',
      },
    ],
  },
  twitter: {
    title: 'Text Summarizer - AI-Powered Content Summary Tool',
    description: 'Transform long articles into concise summaries with our advanced AI text summarizer.',
    images: ['/text-summarizer-preview.jpg'],
  },
};

export default function TextSummarizer() {
  return <ContentSummarizer />;
} 