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
 * Fire Google Ads conversion event and optionally navigate to a URL after tracking.
 * This ensures conversion is tracked before navigation happens.
 */
export function trackConversion(contactType: ContactType, url?: string): void {
  const timestamp = Date.now();

  logConversionEvent({ type: contactType, timestamp });

  if (typeof window.gtag !== 'function') {
    console.warn('[Google Ads Tracking] gtag is not available (blocked or not loaded).');
    if (url) {
      window.location.href = url;
    }
    return;
  }

  try {
    let hasNavigated = false;

    const callback = () => {
      if (hasNavigated) return;
      hasNavigated = true;
      console.log('[Google Ads Tracking] Callback triggered, navigating...');
      if (url) {
        window.location.href = url;
      }
    };

    window.gtag('event', 'conversion', {
      send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
      value: 1.0,
      currency: 'EUR',
      transaction_id: `contact_${contactType}_${timestamp}`,
      event_callback: callback,
      event_timeout: 1500,
    });

    console.log('[Google Ads Tracking] Conversion event sent successfully.');

    setTimeout(callback, 1500);
  } catch (error) {
    console.error('[Google Ads Tracking] Error sending conversion event:', error);
    if (url) {
      window.location.href = url;
    }
  }
}
