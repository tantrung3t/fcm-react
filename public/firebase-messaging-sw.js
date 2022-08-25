importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBONRXPlJ_I-pTqy0rUa_G7pKc4Y8TE68I",
    authDomain: "drf-react-43279.firebaseapp.com",
    projectId: "drf-react-43279",
    storageBucket: "drf-react-43279.appspot.com",
    messagingSenderId: "89643319499",
    appId: "1:89643319499:web:e107256bc51b86ede15b4e"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});