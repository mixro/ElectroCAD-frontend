// src/pages/Team.jsx
const teamMembers = [
    { name: "Eng. Joseph Mwita", role: "Managing Director & Senior Electrical Engineer", specialty: "Power Systems & Industrial Design" },
    { name: "Eng. Aisha Kamando", role: "Lead CAD Engineer", specialty: "AutoCAD Electrical & EPLAN" },
    { name: "Eng. David Rutaih", role: "Senior Renewable Energy Engineer", specialty: "Solar PV Systems & Site Engineering" },
  ];
  
  export default function Team() {
    return (
      <div className="pt-20 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">Meet Our Engineering Team</h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">Experienced professionals delivering technical excellence</p>
  
        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-xl">
              <div className="h-80 bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                <span className="text-6xl text-white/30">👷‍♂️</span>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-1">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }