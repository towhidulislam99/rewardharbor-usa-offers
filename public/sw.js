self.addEventListener('push', (event) => {
  const data = event.data?.json?.() || { title: 'New RewardHarbor offer', body: 'Review the latest eligible USA opportunities.' };
  event.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/rewardharbor-logo.svg',
    badge: '/rewardharbor-logo.svg',
    data: { url: data.url || '/' },
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data?.url || '/'));
});
