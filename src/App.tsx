import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation currentSection={currentSection} onNavigate={setCurrentSection} />

      <div id="home" className="section">
        <Hero onNavigate={setCurrentSection} />
      </div>

      <div id="use-cases" className="section">
        <UseCases />
      </div>

      <div id="features" className="section">
        <Features />
      </div>

      <div id="pricing" className="section">
        <Pricing />
      </div>

      <div id="about" className="section">
        <About />
      </div>

      <div id="contact" className="section">
        <Contact />
      </div>

      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © Žalias Generatorius – info@zaliasgeneratorius.lt
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
