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

      {/* Projects Section */}
      {/* <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-800">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
      {/* <footer className="bg-emerald-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-emerald-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-emerald-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-emerald-300 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-emerald-200">© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;