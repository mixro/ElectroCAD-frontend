// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { BrightnessHigh, DarkMode }from '@mui/icons-material';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Works', path: '/works' },
    // { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div>
              <img 
                src="/full-logo-black.png" 
                alt="EC" 
                className="h-14 sm:h-16 block dark:hidden"
              />

              <img 
                src="/full-logo-white.png" 
                alt="EC" 
                className="h-14 sm:h-16  hidden dark:block"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden text-xl md:flex items-center gap-8 text-neutral-700 dark:text-neutral-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium hover:text-accent-black transition-colors ${
                  location.pathname === link.path ? 'text-accent-black font-semibold' : ''
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
              {theme === 'light' 
                ? <DarkMode sx={{ fontSize: 27 }} />
                : <BrightnessHigh sx={{ fontSize: 27 }} />
              }
            </button>

            <a
              href="https://wa.me/255622739599"
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
              href="https://wa.me/255622739599"
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