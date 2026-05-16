// src/sections/WhyChooseUs.jsx
import {
  PrecisionManufacturing,
  Verified,
  Code,
  Speed,
  Engineering,
  SupportAgent
} from '@mui/icons-material';

const advantages = [
  {
    title: "Technical Precision & Accuracy",
    icon: <PrecisionManufacturing sx={{ fontSize: 48 }} />
  },
  {
    title: "Full IEC & IEEE Standards Compliance",
    icon: <Verified sx={{ fontSize: 48 }} />
  },
  {
    title: "Advanced Software (AutoCAD, EPLAN, ETAP, Revit)",
    icon: <Code sx={{ fontSize: 48 }} />
  },
  {
    title: "Fast Project Delivery",
    icon: <Speed sx={{ fontSize: 48 }} />
  },
  {
    title: "Industry Experienced Engineers",
    icon: <Engineering sx={{ fontSize: 48 }} />
  },
  {
    title: "Client-Centered Solutions",
    icon: <SupportAgent sx={{ fontSize: 48 }} />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-neutral-200 dark:bg-neutral-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-900 dark:text-white">
          Why Choose ElectroCAD Engineering?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-sm hover:shadow-xl 
                         border border-neutral-100 dark:border-neutral-800 
                         transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 text-yellow-dark dark:text-yellow transition-transform group-hover:scale-110 inline-block">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}