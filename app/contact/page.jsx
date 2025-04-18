'use client';

import Navbar from '../components/Navbar';
import ContactForm from './components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactForm />
      </main>
    </div>
  );
}
