import { track } from './analytics.js';

const retentionConfig = window.REWARDHARBOR_RETENTION || {};
const isConfigured = (value) => typeof value === 'string'
  && value.trim() !== ''
  && !/YOUR_|REPLACE|XXXXXXXX|\.example(?:\/|$)/i.test(value);
const isSecureEndpoint = (value) => {
  if (!isConfigured(value)) return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
};
const statusMessage = (element, message, kind = 'info') => {
  element.textContent = message;
  element.dataset.state = kind;
};
const base64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(window.atob(base64), (char) => char.charCodeAt(0));
};

export const setupRetention = () => {
  const emailForm = document.querySelector('#retention-email-form');
  const emailStatus = document.querySelector('#retention-email-status');
  const pushButton = document.querySelector('#enable-push');
  const pushStatus = document.querySelector('#retention-push-status');
  if (!emailForm || !emailStatus || !pushButton || !pushStatus) return;

  const pushSupported = 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window;
  pushButton.disabled = !pushSupported;
  statusMessage(
    pushStatus,
    pushSupported
      ? 'Push notifications are available. Enable them only if you want browser alerts.'
      : 'Push notifications are not supported in this browser.',
    pushSupported ? 'info' : 'error',
  );

  emailForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    track('email_signup_attempt');
    const formData = new FormData(emailForm);
    const email = formData.get('email')?.toString().trim().toLowerCase();
    const consent = formData.get('consent');
    if (!email || !email.includes('@') || !consent) {
      statusMessage(emailStatus, 'Enter a valid email and confirm the consent checkbox.', 'error');
      track('email_signup_error', { reason: 'invalid_input_or_missing_consent' });
      return;
    }
    if (!isSecureEndpoint(retentionConfig.emailEndpoint)) {
      statusMessage(emailStatus, 'Signup is in demo mode. Your email was not sent or saved. Connect a secure email provider endpoint to enable subscriptions.', 'info');
      return;
    }
    try {
      const response = await fetch(retentionConfig.emailEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          consent: true,
          consentTimestamp: new Date().toISOString(),
          source: 'rewardharbor_landing_page',
        }),
      });
      if (!response.ok) throw new Error('Email provider rejected the request');
      emailForm.reset();
      statusMessage(emailStatus, 'You’re on the list. Watch your inbox for new eligible offers.', 'success');
      track('email_signup_success');
    } catch {
      statusMessage(emailStatus, 'We could not complete signup right now. Please try again later.', 'error');
      track('email_signup_error');
    }
  });

  pushButton.addEventListener('click', async () => {
    if (!pushSupported) return;
    track('push_opt_in_attempt');
    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        statusMessage(pushStatus, 'Notifications remain off. You can change this in browser settings.', 'info');
        track('push_opt_in_denied');
        return;
      }
      if (!isSecureEndpoint(retentionConfig.pushEndpoint) || !isConfigured(retentionConfig.vapidPublicKey)) {
        statusMessage(pushStatus, 'Permission is enabled on this browser, but no push provider is configured. No subscription data was sent.', 'info');
        track('push_permission_granted_unconfigured');
        return;
      }
      const applicationServerKey = base64ToUint8Array(retentionConfig.vapidPublicKey);
      if (applicationServerKey.length !== 65 || applicationServerKey[0] !== 4) {
        throw new Error('Invalid VAPID public key');
      }
      const registration = await navigator.serviceWorker.register('/sw.js');
      const subscription = await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey });
      const response = await fetch(retentionConfig.pushEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscription, source: 'rewardharbor_landing_page' }),
      });
      if (!response.ok) throw new Error('Push provider rejected the request');
      statusMessage(pushStatus, 'Push alerts are enabled for this browser.', 'success');
      track('push_opt_in_success');
    } catch {
      statusMessage(pushStatus, 'We could not enable push alerts. Check your browser permission and provider configuration, then try again.', 'error');
      track('push_opt_in_error');
    }
  });
};
