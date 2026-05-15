// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-black font-bold text-2xl">
              E
            </div>
            <div>
              <span className="font-bold text-2xl tracking-tight text-neutral-900 dark:text-white">ElectroCAD</span>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">ENGINEERING</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-neutral-700 dark:text-neutral-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium hover:text-accent transition-colors ${
                  location.pathname === link.path ? 'text-accent font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300"
              title="Toggle Theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <a
              href="https://wa.me/255XXXXXXXXX"
              target="_blank"
              className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors"
            >
              WhatsApp
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-neutral-700 dark:text-neutral-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col py-6 px-6 space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/255XXXXXXXXX"
              target="_blank"
              className="bg-green-600 text-white py-4 text-center rounded-2xl font-medium"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}