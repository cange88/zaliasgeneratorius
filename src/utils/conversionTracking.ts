declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

interface ConversionData {
  type: 'email' | 'phone';
  timestamp: number;
  url: string;
}

const CONVERSION_ID = 'AW-17938724932';
const CONVERSION_LABEL = '90NQCkn44vQbEMTw7OIC';

export function logConversionEvent(data: ConversionData) {
  console.log('[Google Ads Tracking] Conversion event:', {
    type: data.type,
    timestamp: new Date(data.timestamp).toISOString(),
    url: data.url,
  });

  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', 'conversion', {
        send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
        'value': 1.0,
        'currency': 'EUR',
        'transaction_id': `conversion_${data.timestamp}`,
      });

      console.log('[Google Ads Tracking] Primary conversion event fired successfully');
    } catch (error) {
      console.error('[Google Ads Tracking] Error firing primary conversion:', error);
    }

    try {
      window.gtag('event', 'contact_initiated', {
        'contact_type': data.type,
        'timestamp': data.timestamp,
      });

      console.log('[Google Ads Tracking] Backup event (contact_initiated) fired');
    } catch (error) {
      console.error('[Google Ads Tracking] Error firing backup event:', error);
    }
  } else {
    console.warn('[Google Ads Tracking] gtag function not available');
  }
}

export function trackConversionWithDelay(
  contactType: 'email' | 'phone',
  url: string,
  onComplete: () => void
): void {
  const data: ConversionData = {
    type: contactType,
    timestamp: Date.now(),
    url,
  };

  logConversionEvent(data);

  const timeout = setTimeout(() => {
    console.log('[Google Ads Tracking] Timeout reached, proceeding with URL navigation');
    onComplete();
  }, 1500);

  if (typeof window.gtag_report_conversion === 'function') {
    try {
      console.log('[Google Ads Tracking] Using gtag_report_conversion helper');
      window.gtag_report_conversion(url);
      clearTimeout(timeout);
    } catch (error) {
      console.error('[Google Ads Tracking] Error in gtag_report_conversion:', error);
      clearTimeout(timeout);
      onComplete();
    }
  } else {
    console.warn('[Google Ads Tracking] gtag_report_conversion helper not available');
  }
}
