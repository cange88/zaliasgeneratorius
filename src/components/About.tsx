import { Target, Heart, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Ekologiška ir tvari energija',
      description: 'Naudojame atnaujintas EV baterijas, kad sumažintume atliekų kiekį ir skatintume žalią energiją.',
    },
    {
      icon: Heart,
      title: 'Inovatyvūs sprendimai',
      description: 'Nuolat ieškome naujų būdų, kaip paversti senas technologijas naudingiems sprendimams.',
    },
    {
      icon: Shield,
      title: 'Patikimumas ir paprastumas',
      description: 'Mūsų tikslas – suteikti paprastą, patikimą ir efektyvų energijos šaltinį kiekvienam.',
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-green-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-green-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Kodėl pasirinkti mus
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Žalias Generatorius siekia skatinti švarią energiją Lietuvoje. Naudojame atnaujintas
              EV baterijas, kad pasiūlytume tylų, efektyvų ir ekologišką energijos šaltinį.
              Mūsų tikslas – padėti jums būti nepriklausomais nuo tinklo, išlaikant maksimalų
              patogumą ir saugumą.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-3 shadow-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
