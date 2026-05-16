// src/components/WhatsAppButton.jsx
import { WhatsApp } from '@mui/icons-material';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/255622739599"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <WhatsApp sx={{fontSize: 36}} />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
        1
      </span>
    </a>
  );
}