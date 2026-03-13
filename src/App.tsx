import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-forest-800 grain-overlay">
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
