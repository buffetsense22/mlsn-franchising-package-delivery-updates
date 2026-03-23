importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCM6S_RNVOx5Ru2qEt5jjM4TP2GMOgtfKk",
  authDomain: "mlsn-system-ce163.firebaseapp.com",
  projectId: "mlsn-system-ce163",
  messagingSenderId: "987837778134",
  appId: "1:987837778134:web:3e0ab8d840781b4cfea177"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});