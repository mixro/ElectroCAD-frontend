// src/pages/Contact.jsx
import { useState } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `*New Inquiry from Website*%0A%0A` +
      `Name: ${formData.fullName}%0A` +
      `Company: ${formData.company || "Not provided"}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Service: ${formData.service || "General Inquiry"}%0A%0A` +
      `Message:%0A${formData.message}`;

    const whatsappNumber = "255622739599"; // ← Replace with your actual number

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

    // Optional: Reset form after sending
    setFormData({
      fullName: "", company: "", email: "", phone: "", service: "", message: ""
    });
  };

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
        <div className="lg:col-span-7 bg-white dark:bg-neutral-900 rounded-3xl shadow-xl p-4 md:p-12">
          <h2 className="text-2xl pt-4 sm:text-3xl font-semibold mb-8">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors"
                  placeholder="+255 XXX XXX XXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service Interested In</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select a Service (Optional)</option>
                <option>Electrical CAD Drafting</option>
                <option>Building Electrical Design</option>
                <option>Solar & Renewable Energy</option>
                <option>Industrial Documentation</option>
                <option>Technical Redrawing</option>
                <option>Engineering Consultancy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Description / Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 rounded-3xl border border-neutral-400 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:border-accent transition-colors resize-y"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-[#00b8e0] text-black cursor-pointer font-semibold py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Contact */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-8">Quick Contact</h3>
            
            <div className="space-y-6">
              <a href="https://wa.me/255622739599" target="_blank" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600">
                  <WhatsApp sx={{fontSize: 36}} />
                </div>
                <div>
                  <p className="font-medium text-lg">WhatsApp</p>
                  <p className="text-green-600">+255 622 739 599</p>
                  <p className="text-sm text-gray-500">Fastest way to reach us</p>
                </div>
              </a>

              <a href="tel:+255622739599" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="font-medium text-lg">Call Us</p>
                  <p className="text-blue-600">+255 622 739 599</p>
                </div>
              </a>

              <a href="mailto:info@elexcad.co.tz" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="font-medium text-lg">Email Us</p>
                  <p className="text-purple-600">info@elexcad.co.tz</p>
                </div>
              </a>
            </div>
          </div>

          {/* Office Information */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-8">Info</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Clock className="text-accent mt-1" size={26} />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}