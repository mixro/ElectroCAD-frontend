// src/pages/About.jsx
export default function About() {
    return (
      <div className="pt-20 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">About ElectroCAD Engineering</h1>
        
        <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
          <p className="text-center text-xl mb-12">
            We are a professional electrical engineering and technical documentation company 
            delivering intelligent design solutions across Tanzania and Africa.
          </p>
  
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400">
                To become the leading electrical engineering design and technical documentation company in Africa.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">
                To provide precise, efficient, safe and internationally compliant electrical engineering designs and documentation.
              </p>
            </div>
          </div>
  
          <h2 className="text-3xl font-semibold mt-20 mb-8 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Technical Excellence', 'Innovation', 'Safety', 'Reliability', 'Integrity', 'Client Satisfaction'].map((value, i) => (
              <div key={i} className="bg-white dark:bg-neutral-900 p-8 rounded-2xl text-center">
                <h3 className="font-semibold text-xl">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }