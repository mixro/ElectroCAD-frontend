// src/components/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  const defaultMessage = "Hello ElexCAD Engineering,%0A%0AI visited your website and I'm interested in your services.%0APlease assist me.";

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-10 border-t dark:border-neutral-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/full-logo-white.png" 
                alt="EC" 
                className="h-14 sm:h-16"
              />
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
              <Link to="/services" className="block text-gray-400 hover:text-white">Our Services</Link>
              <Link to="/works" className="block text-gray-400 hover:text-white">Our Projects</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">Contact Us</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
            </div>
          </div>

          {/* Services */}
         <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <div className="space-y-3 text-gray-400">
              <Link 
                to="/service/electrical-cad-drafting" 
                className="hover:text-white transition-colors block"
              >
                Electrical CAD Drafting
              </Link>
              
              <Link 
                to="/service/building-electrical-design" 
                className="hover:text-white transition-colors block"
              >
                Building Electrical Design
              </Link>
              
              <Link 
                to="/service/industrial-documentation" 
                className="hover:text-white transition-colors block"
              >
                Industrial Documentation
              </Link>
              
              <Link 
                to="/service/solar-renewable-energy" 
                className="hover:text-white transition-colors block"
              >
                Solar PV System Design
              </Link>
              
              <Link 
                to="/service/technical-redrawing" 
                className="hover:text-white transition-colors block"
              >
                Technical Redrawing
              </Link>
              
              <Link 
                to="/service/engineering-consultancy" 
                className="hover:text-white transition-colors block"
              >
                Engineering Consultancy
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <p>Dar es Salaam, Tanzania</p>
              <p>+255 622 739 599</p>
              <p>info@elexcad.co.tz</p>
            </div>
            
            <a 
              href={`https://wa.me/255622739599?text=${defaultMessage}`} 
              target="_blank"
              className="mt-6 inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-sm font-medium"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ElexCAD Engineering. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}