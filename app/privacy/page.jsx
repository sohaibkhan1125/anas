'use client';

import Navbar from '../components/Navbar';
import Privacy from './components/Privacy';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Privacy />
      </main>
    </div>
  );
} 