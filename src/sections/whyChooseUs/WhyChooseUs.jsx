// src/sections/WhyChooseUs.jsx
const advantages = [
    "Technical Precision & Accuracy",
    "Full IEC & IEEE Standards Compliance",
    "Advanced Software (AutoCAD, EPLAN, ETAP, Revit)",
    "Fast Project Delivery",
    "Industry Experienced Engineers",
    "Client-Centered Solutions"
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="py-20 px-6 bg-neutral-100 dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose ElectroCAD Engineering?</h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div key={i} className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="text-accent text-3xl mb-4">✓</div>
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }