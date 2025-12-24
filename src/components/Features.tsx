import { Sun, Volume2, Battery, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Sun,
      title: 'Naudoja saulės energiją',
      description: 'Atvyksta su įkrova iš saulės ir yra suderinamas su jūsų esamąja saulės energetikos infrastruktūra.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Volume2,
      title: 'Tylus ir be dūmų',
      description: 'Neturi vidaus degimo variklio, todėl jokio kvapo ar triukšmo.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Battery,
      title: 'Pagaminta iš EV baterijų',
      description: 'Naudojamos perdirbtos elektromobilių baterijos, mažinamos atliekos.',
      color: 'from-green-400 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Galingas',
      description: '60 kWh talpa ir 15 kW galia, puikiai tinka renginiams, statyboms ir avarinei energijai.',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <div className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-700 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
