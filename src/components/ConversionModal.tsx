import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface ConversionModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  contactType: 'email' | 'phone';
}

export default function ConversionModal({ isOpen, onConfirm, contactType }: ConversionModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleConfirm = () => {
    setIsClosing(true);
    setTimeout(() => {
      onConfirm();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: isClosing ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 transition-all duration-300 transform ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Dėkojame!
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Greitai atidarysite susisiekimo programą. Mūsų komanda su jums susisieks netrukus.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            Kontaktas: {contactType === 'email' ? 'info@zaliasgeneratorius.lt' : '+370 637 96969'}
          </p>

          <button
            onClick={handleConfirm}
            className="w-full bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Atidaryti
          </button>

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            Arba tiesiog uždarykite šį langą
          </p>
        </div>
      </div>
    </div>
  );
}
