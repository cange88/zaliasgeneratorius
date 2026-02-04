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

      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">MB „Žalias generatorius"</p>
            <div className="space-y-1 text-sm text-gray-300">
              <p>Įmonės kodas: 307572512</p>
              <p>PVM mokėtojo kodas: LT100019600913</p>
              <p>Adresas: Užmiesčio g. 21-16, Šiauliai, Lietuva</p>
              <p>
                El. paštas:{' '}
                <a
                  href="mailto:info@zaliasgeneratorius.lt"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  info@zaliasgeneratorius.lt
                </a>
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Žalias Generatorius. Visos teisės saugomos.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
