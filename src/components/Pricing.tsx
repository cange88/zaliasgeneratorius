import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    '60 kWh įkrauta baterija – akumuliatorinis energijos šaltinis',
    'Iki 15 kW išėjimo galia – generatoriaus alternatyva',
    'Nemokamas pristatymas Šiaulių apskrityje',
    'Techninis palaikymas ir prijungimas vietoje',
  ];

  const pricingOptions = [
    { days: '1 diena', price: 100, note: 'Trumpiems renginiams ir testui' },
    { days: '3+ dienos', price: 80, note: 'Dažniausias pasirinkimas' },
    { days: '5+ dienos', price: 60, note: 'Ilgesniems projektams' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pricing"
      className="py-16 bg-white dark:bg-gray-900 transition-colors"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-12">
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-50"
          >
            Nuomos kaina
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Aiški dienos kaina be paslėptų mokesčių. Tinka renginiams, statyboms ir
            laikinam elektros energijos tiekimui, kai reikalingas tylus ir patikimas sprendimas.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-12" aria-label="Nuomos kainos pagal trukmę">
          {pricingOptions.map((option, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-8 border border-green-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-700 dark:text-gray-200 font-medium mb-2">{option.days}</p>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-green-700 dark:text-green-400">
                  {option.price}
                </span>
                <span className="text-gray-600 dark:text-gray-300">€/diena</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">+PVM</span>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{option.note}</p>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-8 border border-green-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4 flex items-center gap-2">
            <Check className="w-6 h-6 text-green-700 dark:text-green-400" />
            Įskaičiuota į kainą
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8" aria-label="Į kainą įskaičiuotos paslaugos">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-700 dark:text-green-400" strokeWidth={3} />
                </div>
                <span className="text-gray-800 dark:text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToContact}
              className="w-full bg-green-700 dark:bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-800 dark:hover:bg-green-600 transition-all"
              aria-label="Susisiekti dėl nuomos kainos ir rezervacijos"
            >
              Susisiekti dėl nuomos
            </button>

            <button
              onClick={scrollToContact}
              className="w-full bg-white/80 dark:bg-gray-800 text-green-800 dark:text-green-300 border border-green-200 dark:border-gray-700 py-3 rounded-lg font-semibold hover:bg-white dark:hover:bg-gray-700 transition-all"
              aria-label="Gauti individualų pasiūlymą"
            >
              Gauti pasiūlymą
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Galutinė kaina gali priklausyti nuo pristatymo vietos už Šiaulių apskrities ribų,
            reikalingos galios ir naudojimo trukmės. Susisiekite ir pateiksime tikslų pasiūlymą.
          </p>
        </div>
      </div>
    </section>
  );
}
