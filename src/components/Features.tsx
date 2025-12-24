import { Sun, Volume2, Battery, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Sun,
      title: 'Naudoja saulės energiją',
      description:
        'Akumuliatorinis energijos šaltinis gali būti įkraunamas iš saulės elektrinės ir integruojamas su esama saulės energetikos infrastruktūra, didinant tvarumą ir mažinant kaštus.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Volume2,
      title: 'Tylus ir be dūmų',
      description:
        'Visiškai tylus veikimas be vidaus degimo variklio, be dūmų ir kvapų — idealus sprendimas renginiams, miestų aplinkai ir uždaroms erdvėms.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Battery,
      title: 'Akumuliatorinis sprendimas iš EV baterijų',
      description:
        'Naudojamos perdirbtos elektromobilių baterijos, kurios suteikia didelę talpą, patikimumą ir prisideda prie žiedinės ekonomikos.',
      color: 'from-green-400 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Didelė galia ir talpa',
      description:
        'Iki 60 kWh talpa ir 15 kW galia leidžia naudoti kaip generatoriaus alternatyvą renginiams, statyboms, avarinei ar laikinai elektros energijai.',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-white dark:bg-gray-900 transition-colors"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16">
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-50 mb-4"
          >
            Akumuliatorinio energijos šaltinio privalumai
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tylus ir ekologiškas sprendimas, dažnai vadinamas „generatoriumi“,
            skirtas elektros energijos tiekimui ten, kur reikia patikimos ir
            mobilios galios.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
