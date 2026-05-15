import { Sun, Moon, MessageCircle } from 'lucide-react';
import './hero.css';
import { useTheme } from '../../context/ThemeContext';

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="hero-section">
      <div className="hero-grid" />

      <div className="hero-content">
        <h1 className="hero-title">
          Engineering Precision Through<br />
          <span className="accent-text">Intelligent Electrical Design</span>
        </h1>

        <p className="hero-subtitle">
          Professional Electrical CAD Drafting • Industrial Documentation • 
          Solar & Renewable Energy Design • Technical Consultancy Services
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

      <div className="scroll-indicator">Scroll to explore ↓</div>
    </section>
  );
}