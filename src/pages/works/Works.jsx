// src/pages/Works.jsx
import { useState } from 'react';

const projects = [
  { id: 1, title: "Commercial Building Electrical Design", category: "commercial", image: "/images/projects/commercial.jpg", software: "AutoCAD Electrical + ETAP" },
  { id: 2, title: "Industrial MCC & PLC Control System", category: "industrial", image: "/images/projects/industrial.jpg", software: "EPLAN + AutoCAD" },
  { id: 3, title: "150kWp Solar PV System Design", category: "solar", image: "/images/projects/solar.jpg", software: "AutoCAD + MATLAB" },
  { id: 4, title: "Luxury Residential Electrical Layout", category: "residential", image: "/images/projects/residential.jpg", software: "Revit + AutoCAD" },
];

export default function Works() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-4">Our Engineering Projects</h1>
      <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">Precision. Quality. Excellence.</p>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {['all', 'residential', 'commercial', 'industrial', 'solar'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-xl font-medium transition-all ${
              filter === cat 
                ? 'bg-accent text-black' 
                : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-accent text-sm mb-3">{project.software}</p>
              <button className="text-sm font-medium hover:text-accent transition-colors">
                View Project Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}