import { LinkedIn, Mail, Phone } from "@mui/icons-material";

const teamMembers = [
  {
    name: "Eng. Joseph Mwita",
    role: "Managing Director & Senior Electrical Engineer",
    specialty: "Power Systems & Industrial Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    experience: "12+ years",
    email: "joseph@electrocad.co.tz",
    linkedin: "#"
  },
  {
    name: "Eng. Aisha Kamando",
    role: "Lead CAD Engineer",
    specialty: "AutoCAD Electrical, EPLAN & Revit",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    experience: "9+ years",
    email: "aisha@electrocad.co.tz",
    linkedin: "#"
  },
  {
    name: "Eng. David Rutaih",
    role: "Senior Renewable Energy Engineer",
    specialty: "Solar PV Systems & Site Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600",
    experience: "8+ years",
    email: "david@electrocad.co.tz",
    linkedin: "#"
  }
];

export default function Team() {
  return (
    <div className="pt-34 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4">
          Meet Our Engineering Team
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Highly skilled professionals committed to delivering technical excellence 
          and innovative electrical engineering solutions.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl 
                       border border-neutral-100 dark:border-neutral-800 transition-all duration-500 hover:-translate-y-3"
          >
            {/* Image Section */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/70 text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md">
                {member.experience}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-lg mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {member.specialty}
              </p>

              {/* Contact Icons */}
              <div className="flex gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-500 hover:text-accent transition-colors"
                >
                  <Mail sx={{fontSize: 24}} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="text-gray-500 hover:text-accent transition-colors"
                >
                  <LinkedIn sx={{fontSize: 24}} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-accent transition-colors"
                >
                  <Phone sx={{fontSize: 24}} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Statement */}
      <div className="mt-20 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Our team combines decades of collective experience with a passion for 
          precision engineering and modern technology.
        </p>
      </div>
    </div>
  );
}