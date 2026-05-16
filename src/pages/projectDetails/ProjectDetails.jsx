// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <Link to="/works" className="text-accent mt-4 inline-block">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
      {/* Back Button */}
      <Link 
        to="/works" 
        className="inline-flex items-center gap-2 text-accent hover:text-accent-hover mb-8 font-medium"
      >
        <ArrowLeft size={20} /> Back to All Projects
      </Link>

      {/* Hero Image */}
      <div className="relative h-[420px] rounded-3xl overflow-hidden mb-12">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-10 left-10 right-10">
          <span className="inline-block bg-accent text-black text-sm font-semibold px-4 py-2 rounded-full mb-4">
            {project.category.toUpperCase()}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-6">Project Scope</h3>
          <ul className="space-y-4">
            {project.scope.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl sticky top-28 border border-neutral-300 dark:border-neutral-700">
            <h3 className="font-semibold text-xl mb-6">Project Details</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{project.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Year</p>
                <p className="font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Software Used</p>
                <p className="font-medium text-accent">{project.software}</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <h4 className="font-semibold mb-3">Challenge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.challenge}</p>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">Our Solution</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}