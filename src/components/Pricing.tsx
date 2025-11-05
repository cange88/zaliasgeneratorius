import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    '60 kWh įkrauta baterija',
    '15 kW išėjimo galia',
    'Nemokamas pristatymas Šiaulių apskrityje',
    'Techninis palaikymas',
  ];

  const pricingOptions = [
    { days: '1 diena', price: 100 },
    { days: '3+ dienos', price: 80 },
    { days: '5+ dienos', price: 60 },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Kaina
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-600 font-medium mb-2">{option.days}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-green-600">{option.price}</span>
                <span className="text-gray-600">/diena</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 border border-green-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Check className="w-6 h-6 text-green-600" />
            Įskaičiuota:
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToContact}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
          >
            Susisiekti
          </button>
        </div>
      </div>
    </div>
  );
}
