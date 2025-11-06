import { Battery, Leaf, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onNavigate(id);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left md:order-1 order-2">
            <p className="text-2xl md:text-3xl text-gray-900 mb-4 font-light">
              Tvarus, tylus ir galingas energijos šaltinis
            </p>

            <p className="text-xl md:text-2xl text-gray-900 mb-8 font-medium">
              Iš atnaujintų elektromobilių baterijų — patikimumas ir tvarumas
            </p>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Nuomojamas energijos šaltinis - idealus sprendimas renginiams ir statyboms, ypač ten, kur elektros įvado nėra arba jis yra nepakankamas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Susisiekti
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sužinoti daugiau
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end md:order-2 order-1">
            <img
              src="/9546F775-108C-4B48-90B5-1BB5BD2EA1F2.png"
              alt="Žalias Generatorius"
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
