// src/sections/Testimonials.jsx
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Eng. Sarah Mwandu",
    position: "Project Manager",
    company: "Elite Construction Ltd",
    text: "ElectroCAD Engineering delivered highly precise electrical drawings for our 5-storey commercial building. Their attention to detail and compliance with standards helped us complete the project ahead of schedule.",
    image: "👷‍♀️"
  },
  {
    id: 2,
    name: "Mr. Hassan Kimaro",
    position: "Technical Director",
    company: "Tanzania Solar Power Ltd",
    text: "Their solar PV system documentation was exceptional. Clear, professional, and easy to follow. We have worked with them on multiple projects and they never disappoint.",
    image: "☀️"
  },
  {
    id: 3,
    name: "Eng. Michael Rutagumya",
    position: "Electrical Engineer",
    company: "Northern Industries",
    text: "The industrial MCC and automation schematics they produced were of the highest quality. Professional team that understands real industrial requirements.",
    image: "🏭"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Quote size={48} className="text-accent" />
          </div>
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Trusted by engineers, contractors, and industries across Tanzania
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-700"
            >
              <div className="text-4xl mb-6">{testimonial.image}</div>
              
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-8">
                “{testimonial.text}”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}, {testimonial.company}
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