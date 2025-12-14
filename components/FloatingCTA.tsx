import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

export const FloatingCTA: React.FC = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-200 transition-transform hover:scale-110 flex items-center gap-2 animate-bounce-slow"
      aria-label="Falar com Técnico no WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
      <span className="hidden md:inline font-bold">Falar com Técnico</span>
    </button>
  );
};