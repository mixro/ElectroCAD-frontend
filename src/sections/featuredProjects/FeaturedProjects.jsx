// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';

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
  );
}

export default App;