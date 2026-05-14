// src/sections/FeaturedProjects.jsx
export default function FeaturedProjects() {
    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400">Recent work showcasing our expertise</p>
            </div>
            <a href="/works" className="text-accent hover:underline font-medium">View All Projects →</a>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Commercial Complex", "Industrial Plant", "Solar PV Farm", "Residential Villa"].map((title, i) => (
              <div key={i} className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden">
                <div className="h-52 bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center text-6xl">
                  {i === 0 && "🏢"}
                  {i === 1 && "🏭"}
                  {i === 2 && "☀️"}
                  {i === 3 && "🏡"}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Dar es Salaam, Tanzania</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }