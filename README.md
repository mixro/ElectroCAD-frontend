# ElectroCAD Engineering - Frontend

A modern, professional, and fully responsive website for **ElectroCAD Engineering**, a leading electrical engineering and technical documentation company based in Tanzania.

## ✨ Features

- **Modern & Professional Design** with dark/light mode support
- **Fully Responsive** across all devices
- **Service Catalog** with detailed service pages
- **Project Portfolio** with filtering and detailed views
- **Team Showcase**
- **Direct WhatsApp Integration** for service requests and inquiries
- **Fast & Optimized** performance using Vite

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS v4**
- **React Router DOM**
- **Lucide React** (icons)
- **Framer Motion** (animations - optional)
- **Custom Dark/Light Mode** with system preference detection

---

## 📁 Project Structure

```bash
electro-cad-frontend/
├── public/
│   └── images/                  # Static images
│
├── src/
│   ├── assets/                  # Images, icons, illustrations
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ServiceRequestModal.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/Light mode management
│   │
│   ├── data/
│   │   ├── projects.js
│   │   └── services.js
│   │
│   ├── pages/                   # Main pages
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Works.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── About.jsx
│   │   ├── Team.jsx
│   │   └── Contact.jsx
│   │
│   ├── sections/                # Homepage sections
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── Testimonials.jsx
│   │   └── FinalCTA.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/globals.css
│
├── tailwind.config.js
├── vite.config.js
└── README.md

🚀 Installation & Setup
1. Clone the repository
Bashgit clone <your-repo-url>
cd electro-cad-frontend
2. Install dependencies
Bashnpm install
3. Start the development server
Bashnpm run dev
4. Build for production
Bashnpm run build


🎨 Design Features

Dark/Light Mode with system preference detection
WhatsApp-first approach (all inquiries go directly to WhatsApp)
Professional Engineering Aesthetic (blue/electric color scheme)
Smooth animations and hover effects
Mobile-first responsive design


🔗 Important Routes

/ — Home Page
/services — All Services
/service/:slug — Service Details
/works — Project Portfolio
/project/:id — Project Details
/about — About Us
/team — Our Team
/contact — Contact Us


📱 WhatsApp Integration
All service requests and contact form submissions are sent directly to WhatsApp for instant response. Make sure to update your WhatsApp number in:

ServiceRequestModal.jsx
Quick contact links


🧑‍💻 Development Notes

Uses Tailwind CSS v4 with CSS variables
Component-based architecture
Clean separation between pages and reusable sections
Fully accessible and SEO-friendly


📄 License
Copyright © 2025 ElectroCAD Engineering. All Rights Reserved.

Built with precision for ElectroCAD Engineering ⚡