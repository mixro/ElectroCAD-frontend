// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Large 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[240px] font-bold text-neutral-200 dark:text-neutral-800 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl md:text-7xl font-bold text-accent tracking-widest">
              OOPS!
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-[#00b8e0] text-black font-semibold px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105"
          >
            <Home size={24} />
            Back to Home
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 border-2 border-neutral-300 dark:border-neutral-700 hover:border-accent text-neutral-700 dark:text-neutral-300 font-semibold px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105"
          >
            <Search size={24} />
            Browse Services
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/works" className="hover:text-accent transition-colors">Our Projects</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-accent/20 text-8xl">
          ⚡
        </div>
      </div>
    </div>
  );
}