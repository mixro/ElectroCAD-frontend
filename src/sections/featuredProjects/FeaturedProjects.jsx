import { Link } from "react-router-dom";
import { projectsData } from "../../data/projects";


export default function FeaturedProjects() {
  return (
    <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Recent work showcasing our expertise
            </p>
          </div>
          
          <a 
            href="/works" 
            className="text-accent hover:underline font-medium self-start md:self-auto"
          >
            View All Projects →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.slice(0, 4).map((project, i) => (
            <div 
              key={i} 
              className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl 
                         transition-all duration-500 hover:-translate-y-2 border border-neutral-300 dark:border-neutral-100 dark:shadow-neutral-200"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <Link 
                  to={`/project/${project.id}`}
                  className="relative block w-full h-full z-30"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm z-50">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pb-3">
                <h3 className="font-semibold text-xl text-neutral-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.location}
                </p>
              </div>

              <div className="px-6 pb-4">
                <Link 
                  to={`/project/${project.id}`}
                  className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-accent-hover"
                >
                  <p>View →</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}