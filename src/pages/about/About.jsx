// src/pages/About.jsx
import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-35 pb-16 px-6 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6">
            <Award className="text-accent" />
            <span className="text-sm font-medium tracking-widest">ESTABLISHED 2024 • TANZANIA</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Engineering the Future<br />
            <span className="text-accent">of Electrical Design</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We are a professional electrical engineering and technical documentation company 
            delivering intelligent, precise, and standards-compliant solutions across Tanzania and Africa.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p className="text-center text-2xl font-light mb-16">
              ElectroCAD Engineering was founded with a clear purpose: to raise the standard of 
              electrical engineering documentation and design in East Africa.
            </p>
            
            <p>
              We combine deep technical expertise with modern CAD technologies to transform 
              complex electrical concepts into clear, accurate, and highly professional documentation.
            </p>
            <p>
              Today, we proudly serve real estate developers, industrial plants, solar companies, 
              contractors, and government institutions with reliable engineering solutions that 
              prioritize safety, efficiency, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-neutral-800 p-10 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center">
                <Eye className="text-amber-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              To become the leading electrical engineering design and technical documentation 
              company in Africa — recognized for precision, innovation, and engineering excellence.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-10 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                <Target className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              To provide precise, efficient, safe, and internationally compliant electrical 
              engineering designs and documentation that power modern infrastructure and industrial development.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Core Values</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            These principles guide every project and every decision we make
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Technical Excellence", desc: "We maintain the highest standards of engineering accuracy and professionalism." },
              { title: "Innovation", desc: "We embrace modern technologies and intelligent engineering solutions." },
              { title: "Safety", desc: "We prioritize electrical safety and full compliance with international standards." },
              { title: "Reliability", desc: "We deliver dependable services that our clients can trust." },
              { title: "Integrity", desc: "We operate with honesty, transparency, and professional accountability." },
              { title: "Client Satisfaction", desc: "We are committed to exceeding client expectations in every project." }
            ].map((value, i) => (
              <div 
                key={i} 
                className="group bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-300 dark:border-neutral-800 hover:border-accent transition-all hover:shadow-xl"
              >
                <div className="text-accent mb-5">
                  <Users size={42} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-6 bg-accent text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Partner with us for your next electrical engineering project
          </h2>
          <p className="text-lg opacity-90">
            Together, we build safer, smarter, and more efficient electrical systems 
            that power Tanzania’s future.
          </p>
        </div>
      </section>
    </div>
  );
}