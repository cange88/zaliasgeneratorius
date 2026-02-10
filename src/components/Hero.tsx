import { ArrowRight } from 'lucide-react';

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
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
      aria-label="Žalias Generatorius"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-40 dark:opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left md:order-1 order-2 max-w-xl">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-50 leading-tight mb-6">
              Tylus akumuliatorinis energijos šaltinis nuomai
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 font-normal">
              Iš atnaujintų elektromobilių baterijų — patikimumas ir tvarumas
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300/90 mb-10 leading-relaxed">
              Nuomojamas energijos šaltinis — idealus sprendimas renginiams ir statyboms, ypač ten, kur elektros įvado
              nėra arba jis yra nepakankamas.
            </p>

            <p className="sr-only">
              Ekologiškas energijos šaltinis nuomai Šiauliuose ir visoje Lietuvoje. Tylus sprendimas be dyzelino,
              tinkamas renginiams, statyboms ir laikinam elektros tiekimo užtikrinimui. Daugelis ieško „generatoriaus“
              nuomai, tačiau tai yra akumuliatorinis energijos šaltinis su didele talpa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-green-600 dark:bg-green-500 text-white rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-all transform hover:scale-102 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                aria-label="Susisiekti dėl nuomos"
              >
                Susisiekti
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection('features')}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-green-700 dark:text-green-400 border-2 border-green-700 dark:border-green-500 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-gray-700 transition-all transform hover:scale-102 shadow-lg hover:shadow-xl"
                aria-label="Sužinoti daugiau apie savybes"
              >
                Sužinoti daugiau
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end md:order-2 order-1">
            <img
              src={`${import.meta.env.BASE_URL}9546F775-108C-4B48-90B5-1BB5BD2EA1F2.png`}
              alt="Tylus akumuliatorinis energijos šaltinis nuomai renginiams ir statyboms"
              className="w-full max-w-2xl h-auto"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
