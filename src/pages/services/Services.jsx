// src/pages/Services.jsx
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';

export default function Services() {
  return (
    <div className="pt-30 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Professional electrical engineering solutions tailored for your project needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-neutral-200 dark:border-neutral-300 dark:shadow-neutral-300 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative h-64 overflow-hidden border-b border-neutral-300 dark:border-neutral-700">
              <Link 
                to={`/service/${service.slug}`}
                className="relative block w-full h-full z-30 cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/70 text-xs font-semibold px-4 py-1.5 rounded-full z-50">
                {service.category}
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                {service.shortDesc}
              </p>

              <Link
                to={`/service/${service.slug}`}
                className="text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More 
                <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}