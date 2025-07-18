import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  const phoneNumber = '254758663405'; // Kenya format
  const message = encodeURIComponent('Hi! I\'m interested in learning more about Synaflow AI automation services.');
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default WhatsAppChat;