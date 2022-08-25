// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBONRXPlJ_I-pTqy0rUa_G7pKc4Y8TE68I",
  authDomain: "drf-react-43279.firebaseapp.com",
  projectId: "drf-react-43279",
  storageBucket: "drf-react-43279.appspot.com",
  messagingSenderId: "89643319499",
  appId: "1:89643319499:web:e107256bc51b86ede15b4e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BKW2tjYuVkDQ-JUghyZ3iYOXMl0x3mW_xPbl4Nphyhioz-tLCo327HHICw47ABoIrFkaebUUJsO8ZoIDSv7DURM'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }
  
  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
  });