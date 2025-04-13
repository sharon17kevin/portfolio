import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-customGreen-dark">
      {/* Hero Section */}
      <HeroSection/>

      {/* About Section */}
      <About/>

      {/* Projects Section */}
      <Projects/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
}

export default App;