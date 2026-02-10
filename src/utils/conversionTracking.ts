declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type ContactType = 'email' | 'phone';

interface ConversionData {
  type: ContactType;
  timestamp: number;
}

const CONVERSION_ID = 'AW-17938724932';
const CONVERSION_LABEL = '9QNQCKn44vQbEMTw7OlC';

/**
 * Optional: console logging to help debugging
 */
function logConversionEvent(data: ConversionData) {
  console.log('[Google Ads Tracking] Conversion fired:', {
    type: data.type,
    timestamp: new Date(data.timestamp).toISOString(),
  });
}

/**
 * Fire Google Ads conversion event.
 * IMPORTANT: This function DOES NOT navigate.
 * Navigation (mailto/tel) should happen only after user confirms in the modal.
 */
export function trackConversion(contactType: ContactType): void {
  const timestamp = Date.now();

  logConversionEvent({ type: contactType, timestamp });

  if (typeof window.gtag !== 'function') {
    console.warn('[Google Ads Tracking] gtag is not available (blocked or not loaded).');
    return;
  }

  try {
    window.gtag('event', 'conversion', {
      send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
      value: 1.0,
      currency: 'EUR',
      transaction_id: `contact_${contactType}_${timestamp}`,
    });

    console.log('[Google Ads Tracking] Conversion event sent successfully.');
  } catch (error) {
    console.error('[Google Ads Tracking] Error sending conversion event:', error);
  }
}
