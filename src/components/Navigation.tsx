import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Pradžia' },
    { id: 'use-cases', label: 'Naudojimas' },
    { id: 'features', label: 'Savybės' },
    { id: 'pricing', label: 'Kaina' },
    { id: 'about', label: 'Apie mus' },
    { id: 'contact', label: 'Kontaktai' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onNavigate(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}icon.png`}
              alt="Logo"
              className="w-8 h-8"
            />
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Žalias Generatorius
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentSection === item.id
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentSection === item.id
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
