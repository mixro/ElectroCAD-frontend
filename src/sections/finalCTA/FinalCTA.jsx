// src/sections/FinalCTA.jsx
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary via-primary-dark to-neutral-950 text-white relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D4FF15_1px,transparent_1px),linear-gradient(to_bottom,#00D4FF15_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Ready to Start Your Next <br className="hidden md:inline" />
          Electrical Engineering Project?
        </h2>

        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Get professional electrical designs, CAD documentation, and technical solutions 
          delivered with precision and speed.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          {/* Primary CTA - Request Service */}
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ 
              behavior: 'smooth' 
            })}
            className="group w-full sm:w-auto px-10 py-4 sm:py-4 bg-accent hover:bg-[#00b8e0] text-black font-semibold text-lg rounded-2xl flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
          >
            Request a Service Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA - WhatsApp */}
          <button 
            onClick={() => window.open('https://wa.me/255XXXXXXXXX', '_blank')}
            className="w-full sm:w-auto px-10 py-4 sm:py-4 border-2 border-white/70 hover:border-accent hover:text-accent font-semibold text-lg rounded-2xl flex items-center gap-3 transition-all hover:scale-105"
          >
            <MessageCircle size={26} />
            Chat on WhatsApp
          </button>
        </div>

        <p className="mt-8 text-sm text-blue-200">
          Fast Response • Competitive Pricing • Professional Quality
        </p>
      </div>
    </section>
  );
}