// src/pages/ServiceDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { servicesData } from '../../data/services';
import { useState } from 'react';
import ServiceRequestModal from '../../components/serviceRequestModal/ServiceRequestModal';

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!service) {
        return (
        <div className="pt-32 pb-20 text-center">
            <h2 className="text-3xl font-bold">Service not found</h2>
            <Link to="/services" className="text-accent mt-4 inline-block">← Back to Services</Link>
        </div>
        );
    }

  return (
    <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
      <Link to="/services" className="inline-flex items-center gap-2 text-accent mb-8 hover:underline">
        <ArrowLeft size={20} /> Back to Services
      </Link>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left Content */}
        <div className="lg:col-span-3">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-auto sm:h-[420px] rounded-2xl sm:rounded-3xl shadow-xl mb-10 object-cover border border-neutral-300 dark:border-neutral-700"
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {service.description}
          </p>

          <h3 className="text-2xl font-semibold mt-14 mb-6">Key Features</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-accent text-xl">•</span>
                <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 sticky top-28 border border-neutral-300 dark:border-neutral-700">
            <h3 className="text-xl font-semibold mb-6">Service Information</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{service.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Software Used</p>
                <p className="font-medium text-accent">{service.software.join(", ")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Deliverables</p>
                <p className="font-medium">{service.deliverables}</p>
              </div>
            </div>

            <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-10 bg-accent hover:bg-[#00b8e0] text-black font-semibold py-4 rounded-2xl text-lg transition-all"
            >
              Request This Service
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              You will be redirected to WhatsApp after filling the form
            </p>
          </div>
        </div>
      </div>

        {/* Service Request Modal */}
        <ServiceRequestModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            defaultService={service.title}
        />
    </div>
  );
}