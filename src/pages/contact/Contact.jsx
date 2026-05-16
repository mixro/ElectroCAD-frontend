// src/pages/Contact.jsx
import { Mail, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-30 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ready to start your project? We’re here to help. Reach out to us and let’s build something great together.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-neutral-900 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your Company Ltd"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors"
                  placeholder="+255 XXX XXX XXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service Interested In</label>
              <select className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors">
                <option value="">Select a Service</option>
                <option>Electrical CAD Drafting</option>
                <option>Building Electrical Design</option>
                <option>Solar & Renewable Energy</option>
                <option>Industrial Documentation</option>
                <option>Technical Redrawing</option>
                <option>Engineering Consultancy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Description</label>
              <textarea
                rows={6}
                className="w-full px-5 py-4 rounded-3xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors resize-y"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-[#00b8e0] text-black cursor-pointer font-semibold py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Contact */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-8">Quick Contact</h3>
            
            <div className="space-y-6">
              <a href="https://wa.me/255XXXXXXXXX" target="_blank" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="font-medium text-lg">WhatsApp</p>
                  <p className="text-green-600">+255 XXX XXX XXX</p>
                  <p className="text-sm text-gray-500">Fastest way to reach us</p>
                </div>
              </a>

              <a href="tel:+255XXXXXXXXX" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="font-medium text-lg">Call Us</p>
                  <p className="text-blue-600">+255 XXX XXX XXX</p>
                </div>
              </a>

              <a href="mailto:info@electrocad.co.tz" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="font-medium text-lg">Email Us</p>
                  <p className="text-purple-600">info@electrocad.co.tz</p>
                </div>
              </a>
            </div>
          </div>

          {/* Office Information */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-8">Info</h3>
            
            <div className="space-y-6">
              {/* <div className="flex gap-4">
                <MapPin className="text-accent mt-1" size={26} />
                <div>
                  <p className="font-medium">Dar es Salaam, Tanzania</p>
                  <p className="text-gray-600 dark:text-gray-400">Plot No. 123, Mikocheni Area</p>
                </div>
              </div> */}

              <div className="flex gap-4">
                <Clock className="text-accent mt-1" size={26} />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            {/* <div className="mt-10 h-64 bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center border border-dashed border-neutral-300 dark:border-neutral-700">
              <p className="text-gray-500">Google Map Embed Here</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}