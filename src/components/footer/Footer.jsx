// src/components/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-black font-bold text-2xl">
                E
              </div>
              <div>
                <span className="font-bold text-2xl">ElectroCAD</span>
                <p className="text-xs text-gray-400">ENGINEERING</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional Electrical Design & Technical Documentation Solutions in Tanzania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
              <Link to="/works" className="block text-gray-400 hover:text-white">Our Projects</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
              <Link to="/team" className="block text-gray-400 hover:text-white">Our Team</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <div className="space-y-3 text-gray-400">
              <p>Electrical CAD Drafting</p>
              <p>Building Electrical Design</p>
              <p>Industrial Documentation</p>
              <p>Solar PV System Design</p>
              <p>Engineering Consultancy</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <p>Dar es Salaam, Tanzania</p>
              <p>+255 XXX XXX XXX</p>
              <p>info@electrocad.co.tz</p>
            </div>
            
            <a 
              href="https://wa.me/255XXXXXXXXX" 
              target="_blank"
              className="mt-6 inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-sm font-medium"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ElectroCAD Engineering. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}