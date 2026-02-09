import { Mail, Phone } from 'lucide-react';

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export default function Contact() {
  const emailUrl = 'mailto:info@zaliasgeneratorius.lt';
  const phoneUrl = 'tel:+37063796969';

  const handleTrackedClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();

    // If helper exists, use it. If not, still open mail/tel immediately.
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(url);
    } else {
      window.location.href = url;
    }
  };

  return (
    <div className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Kontaktai
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Email */}
            <div className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                    El. paštas
                  </h3>

                  <a
                    href={emailUrl}
                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                    onClick={(e) => handleTrackedClick(e, emailUrl)}
                  >
                    info@zaliasgeneratorius.lt
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                    Telefonas
                  </h3>

                  <a
                    href={phoneUrl}
                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                    onClick={(e) => handleTrackedClick(e, phoneUrl)}
                  >
                    +370 637 96969
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: add a real button CTA too if you want more conversions */}
        </div>
      </div>
    </div>
  );
}
