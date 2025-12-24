import { Music, HardHat, Home, Plug } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: Music,
      title: 'Renginiai',
      description: 'Energijos tiekimas scenoms, apšvietimui ar įrangai – tylus ir ekologiškas.',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: HardHat,
      title: 'Statybos',
      description: 'Papildoma galia, kai tinklo nepakanka arba vietoje nėra.',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: Plug,
      title: 'Elektros įvado galios didinimas',
      description: 'Papildomas tinklo galingumas dideliems projektams ar renginiams.',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      icon: Home,
      title: 'Nesant elektros įvadui / Avarinis',
      description: 'Nepriklausomas energijos šaltinis arba avarinė atsarginė galia.',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className="absolute inset-0 opacity-90 dark:opacity-80"
                  style={{ background: useCase.image }}
                ></div>

                <div className="relative p-8 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="w-14 h-14 bg-white/20 dark:bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {useCase.title}
                    </h3>
                  </div>

                  <p className="text-white/90 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
