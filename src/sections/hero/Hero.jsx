import { Sun, Moon, MessageCircle } from 'lucide-react';
import './hero.css';
import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
const words = [
  "Intelligent Electrical Design.",
  "Advanced Electrical Engineering.",
  "Professional Power System Design."
];

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="hero-section">
      <div className="hero-grid" />

      <div className="hero-content">
        <h1 className="hero-title">
          Engineering Precision Through
        </h1>
        <div style={{ overflow: "hidden", height: "90px" }} className='hero-animated-text'>
          <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -90, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 70 }}
              className='hero-wobby-text'
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="hero-subtitle">
          Professional Electrical CAD Drafting <span  className="text-accent px-4">•</span> Industrial Documentation <span  className="text-accent px-4">• </span> 
          Solar & Renewable Energy Design <span  className="text-accent px-4">•</span> Technical Consultancy Services
        </p>

        <p className="hero-subtitle hero-subtitle-small">
          Professional Electrical CAD Drafting, <br /> Industrial Documentation, <br /> 
          Solar & Renewable Energy Design, <br /> Technical Consultancy Services.
        </p>

        <div className="hero-buttons">
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Service
          </button>

          <button 
            className="btn-secondary"
            onClick={() => window.open('https://wa.me/255XXXXXXXXX', '_blank')}
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme} 
        className="theme-toggle"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </section>
  );
}