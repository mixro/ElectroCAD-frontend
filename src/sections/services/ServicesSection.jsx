import { Link } from "react-router-dom";
import { servicesData } from "../../data/services";


export default function Services() {
  return (
    <section id="services-section" className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
            Our Engineering Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Precision-driven solutions for modern infrastructure and industrial projects
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl 
                         border border-neutral-300 dark:border-neutral-500 
                         transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image Area */}
              <div className={`h-52 relative overflow-hidden bg-gradient-to-br ${service.color} border-b border-neutral-300 dark:border-neutral-700`}>
                
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
                
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

                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(#ffffff15_1px,transparent_1px),linear-gradient(90deg,#ffffff15_1px,transparent_1px)] bg-[size:30px_30px] z-20" />
              </div>

              {/* Content Area */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15.5px]">
                  {service.shortDesc}
                </p>

                {/* Learn More */}
                <Link 
                  to={`/service/${service.slug}`}
                  className="mt-3 inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                >
                  View service 
                  <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}