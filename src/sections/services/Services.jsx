// src/sections/Services.jsx
const services = [
    {
      title: "Electrical CAD Drafting",
      desc: "Schematics, Single Line Diagrams, Panel Layouts, Wiring & Cable Routing",
      icon: "⚡"
    },
    {
      title: "Building Electrical Design",
      desc: "Lighting, Power Distribution, Earthing, Load Calculation & Backup Systems",
      icon: "🏠"
    },
    {
      title: "Industrial Documentation",
      desc: "MCC Panels, PLC Wiring, Motor Control & Automation Schematics",
      icon: "🏭"
    },
    {
      title: "Solar & Renewable Energy",
      desc: "Solar PV Systems, Hybrid Solutions, Inverter & Battery Bank Design",
      icon: "☀️"
    },
    {
      title: "Technical Redrawing",
      desc: "Convert old drawings into modern, accurate CAD documentation",
      icon: "📐"
    },
    {
      title: "Engineering Consultancy",
      desc: "Site Inspection, System Analysis, Technical Reports & Design Review",
      icon: "🔧"
    }
  ];
  
  export default function Services() {
    return (
      <section id="services-section" className="py-20 px-6 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Engineering Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Precision-driven solutions for modern infrastructure</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }