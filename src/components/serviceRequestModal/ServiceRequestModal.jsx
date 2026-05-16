// src/components/ServiceRequestModal.jsx
import { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function ServiceRequestModal({ isOpen, onClose, defaultService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    description: "",
    deadline: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*New Service Request from Website*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A` +
      `Service: ${formData.service}%0A` +
      `Deadline: ${formData.deadline || "Not specified"}%0A%0A` +
      `Project Description:%0A${formData.description}`;

    const whatsappNumber = "255622739599"; // ← Replace with your number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
    
    // Reset form and close modal
    setFormData({
      name: "", phone: "", email: "", service: defaultService, description: "", deadline: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-neutral-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b dark:border-neutral-700">
          <h2 className="text-2xl font-semibold">Request Service</h2>
          <button onClick={onClose} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-5 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 focus:border-accent outline-none"
              placeholder="Your full name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-5 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 focus:border-accent outline-none"
                placeholder="+255 XXX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-5 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 focus:border-accent outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Service Required</label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-5 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 focus:border-accent outline-none"
            >
              <option value="">Select Service</option>
              <option value="Electrical CAD Drafting">Electrical CAD Drafting</option>
              <option value="Building Electrical Design">Building Electrical Design</option>
              <option value="Solar & Renewable Energy">Solar & Renewable Energy</option>
              <option value="Industrial Documentation">Industrial Documentation</option>
              <option value="Technical Redrawing">Technical Redrawing</option>
              <option value="Engineering Consultancy">Engineering Consultancy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Project Description / Requirements *</label>
            <textarea
              required
              rows={5}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-5 py-4 rounded-3xl border border-neutral-300 dark:border-neutral-700 focus:border-accent outline-none resize-y"
              placeholder="Please describe your project needs..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Expected Deadline (Optional)</label>
            <input
              type="text"
              value={formData.deadline}
              onChange={(e) => setFormData({...formData, deadline: e.target.value})}
              className="w-full px-5 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 focus:border-accent outline-none"
              placeholder="e.g., Within 2 weeks"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-[#00b8e0] text-black font-semibold py-4 rounded-2xl text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
          >
            <Send size={22} />
            Send Request via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}