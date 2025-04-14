'use client';

import Navbar from '../components/Navbar';
import About from './components/About';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <About />
      </main>
    </div>
  );
}
