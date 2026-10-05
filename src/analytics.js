const config = window.REWARDHARBOR_TRACKING || {};
const isConfigured = (value) => typeof value === 'string' && value.trim() && !/REPLACE|XXXXXXXX|YOUR_/i.test(value);
const loadScript = (src, attributes = {}) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.appendChild(script);
  return script;
};

let gaReady = false;
let metaReady = false;

if (isConfigured(config.ga4MeasurementId)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', config.ga4MeasurementId, { anonymize_ip: true, transport_type: 'beacon' });
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.ga4MeasurementId)}`);
  gaReady = true;
}

if (isConfigured(config.metaPixelId)) {
  window.fbq = window.fbq || function fbq() {
    if (window.fbq.callMethod) window.fbq.callMethod.apply(window.fbq, arguments);
    else window.fbq.queue.push(arguments);
  };
  if (!window.fbq.loaded) {
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];
    loadScript('https://connect.facebook.net/en_US/fbevents.js');
  }
  window.fbq('init', config.metaPixelId);
  window.fbq('track', 'PageView');
  metaReady = true;
}

export const track = (eventName, params = {}) => {
  if (gaReady && typeof window.gtag === 'function') window.gtag('event', eventName, params);
  if (metaReady && typeof window.fbq === 'function') window.fbq('trackCustom', eventName, params);
};
