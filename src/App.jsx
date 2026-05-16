
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Team from './pages/team/Team'
import Works from './pages/works/Works'
import ProjectDetail from './pages/projectDetails/ProjectDetails';
import Services from './pages/services/Services';
import ServiceDetail from './pages/serviceDetails/ServiceDetails';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/project/:id" element={<ProjectDetail />} />

            <Route path="/services" element={<Services />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />

            <Route path="/about" element={<About />} />
            <Route path="/eteam" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
