'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    // Open WhatsApp Chat with the client's number and a predefined message
    window.open(
      'https://wa.me/917990274202?text=Hi%20The%20Food%20Maniacs%20Co.,%20I%20would%20like%20to%20know%20more%20about%20your%20menu%20/%20franchise%20opportunities.',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 md:bottom-8 right-6 z-50 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group cursor-pointer animate-bounce"
      style={{ animationDuration: '3s' }}
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 fill-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-out whitespace-nowrap text-sm font-semibold tracking-wide">
        Chat With Us
      </span>
    </button>
  );
}
