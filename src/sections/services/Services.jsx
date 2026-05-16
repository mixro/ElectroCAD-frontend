// src/sections/Services.jsx
const services = [
  {
    title: "Electrical CAD Drafting",
    desc: "Schematics, Single Line Diagrams, Panel Layouts, Wiring & Cable Routing",
    image: "https://elecdes.com/static/images/slider-features/eds-schematic.png",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Building Electrical Design",
    desc: "Lighting layouts, Power distribution, Earthing, Load calculations & Backup systems",
    image: "https://www.delwit.com/wp-content/uploads/2025/06/Electrical-Design.png",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Solar & Renewable Energy",
    desc: "Solar PV Systems, Hybrid Solutions, Inverter & Battery Bank Design",
    image: "https://solartek.vn/vnt_upload/news/06_2024/nang_luong_mat_troi_nguon_nang_luong_tai_tao_phong_phu_va_tiem_nang.jpg",
    color: "from-yellow-500 to-emerald-500"
  },
  {
    title: "Industrial Documentation",
    desc: "MCC Panels, PLC Wiring, Motor Control Centers & Automation Schematics",
    image: "https://cdn.automationforum.co/uploads/2025/07/PLC-System-Documentation-Guide-Essential-Records-for-Industrial-Automation-Success-1-scaled.jpg",
    color: "from-red-500 to-rose-500"
  },
  {
    title: "Technical Redrawing",
    desc: "Convert legacy drawings into accurate, modern CAD documentation",
    image: "https://i0.wp.com/aabsys.com/wp-content/uploads/2023/06/what-is-cad.png?fit=666%2C352&ssl=1",
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Engineering Consultancy",
    desc: "Site inspections, System analysis, Technical reports & Design review",
    image: "https://capstone.co.in/wp-content/uploads/2021/03/1-800x480.jpg",
    color: "from-teal-500 to-cyan-500"
  }
];

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
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl 
                         border border-neutral-300 dark:border-neutral-500 
                         transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image Area */}
              <div className={`h-52 relative overflow-hidden bg-gradient-to-br ${service.color}`}>
                
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(#ffffff15_1px,transparent_1px),linear-gradient(90deg,#ffffff15_1px,transparent_1px)] bg-[size:30px_30px] z-20" />
              </div>

              {/* Content Area */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15.5px]">
                  {service.desc}
                </p>

                {/* Learn More */}
                <div className="mt-6 inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                  Learn More 
                  <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}