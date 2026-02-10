import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ConversionModalProps {
  isOpen: boolean;
  onConfirm: () => void;   // open mail/tel
  onClose: () => void;     // just close modal
  contactType: 'email' | 'phone';
}

export default function ConversionModal({
  isOpen,
  onConfirm,
  onClose,
  contactType,
}: ConversionModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const closeNow = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  };

  const confirmNow = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onConfirm();
    }, 200);
  };

  useEffect(() => {
    if (!isOpen) return;

    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // ESC closes
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNow();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || 'auto';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: isClosing ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)' }}
      onMouseDown={closeNow} // click outside closes
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 transition-all duration-200 transform ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        onMouseDown={(e) => e.stopPropagation()} // prevent outside click closing when clicking inside
      >
        <div className="p-8 text-center relative">
          {/* X close */}
          <button
            type="button"
            onClick={closeNow}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Uždaryti"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Dėkojame!
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Greitai atidarysite susisiekimo programą.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            Kontaktas: {contactType === 'email' ? 'info@zaliasgeneratorius.lt' : '+370 637 96969'}
          </p>

          <button
            type="button"
            onClick={confirmNow}
            className="w-full bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Atidaryti
          </button>

          {/* CLICKABLE close line (this was your problem) */}
          <button
            type="button"
            onClick={closeNow}
            className="mt-4 text-xs text-gray-500 dark:text-gray-400 hover:underline"
          >
            Arba tiesiog uždarykite šį langą
          </button>
        </div>
      </div>
    </div>
  );
}
