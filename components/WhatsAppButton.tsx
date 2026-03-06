
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "905434123380"; // Format for WhatsApp link
  const message = "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      title="WhatsApp ile İletişime Geçin"
    >
      <MessageCircle size={32} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black text-[11px] uppercase tracking-widest whitespace-nowrap">
        WhatsApp Destek
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
