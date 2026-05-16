// src/pages/Works.jsx
import { useState } from 'react';
import { projectsData } from '../../data/projects';
import { Link } from 'react-router-dom';


export default function Works() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="pt-30 pb-20 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4">
          Our Engineering Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Precision. Quality. Excellence.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {['all', 'residential', 'commercial', 'industrial', 'solar'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-3 rounded-2xl font-medium text-sm md:text-base transition-all duration-300 capitalize
              ${filter === cat 
                ? 'bg-accent text-black shadow-md' 
                : 'bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700'
              }`}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl 
                       border border-neutral-200 dark:border-neutral-500 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
              
              {/* Category Badge */}
              <div className="absolute top-5 right-5 bg-white/90 dark:bg-black/70 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-md">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="font-semibold text-xl leading-tight text-neutral-900 dark:text-white mb-3 line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-accent text-sm mb-4 font-medium">
                {project.software}
              </p>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {project.location}, Tanzania
              </p>

              <Link 
                to={`/project/${project.id}`}
                className="text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all group-hover:text-accent-hover"
              >
                View Project Details 
                <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if needed in future) */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}