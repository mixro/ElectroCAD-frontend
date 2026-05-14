
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import About from './pages/about/About'
import Contact from './pages/contant/Contant'
import Home from './pages/home/Home'
import Team from './pages/team/Team'
import Works from './pages/works/Works'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
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
