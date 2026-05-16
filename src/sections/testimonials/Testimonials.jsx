// src/sections/Testimonials.jsx
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Eng. Sarah Mwandu",
    position: "Project Manager",
    company: "Elite Construction Ltd",
    text: "ElectroCAD Engineering delivered highly precise electrical drawings for our 5-storey commercial building. Their attention to detail and compliance with standards helped us complete the project ahead of schedule.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    id: 2,
    name: "Mr. Hassan Kimaro",
    position: "Technical Director",
    company: "Tanzania Solar Power Ltd",
    text: "Their solar PV system documentation was exceptional. Clear, professional, and easy to follow. We have worked with them on multiple projects and they never disappoint.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
  },
  {
    id: 3,
    name: "Eng. Michael Rutagumya",
    position: "Electrical Engineer",
    company: "Northern Industries",
    text: "The industrial MCC and automation schematics they produced were of the highest quality. Professional team that understands real industrial requirements.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Quote size={48} className="text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by engineers, contractors, and industries across Tanzania
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 
                         rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 
                         hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-yellow/80 group-hover:text-accent/50 transition-colors" size={36} />
              </div>

              {/* Testimonial Text */}
              <p className="text-[17px] leading-relaxed text-neutral-700 dark:text-neutral-300 mb-10 flex-grow">
                “{testimonial.text}”
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-accent/20"
                />
                <div>
                  <h4 className="font-semibold text-lg text-neutral-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-yellow font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}