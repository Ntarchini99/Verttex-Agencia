import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/3484365436"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-colors duration-300 z-50 animate-pulse"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
