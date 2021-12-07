import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3lVjSViY5EWA4jC5Yt_W0cM9kRR_1OI",
  authDomain: "fcm-web-demo-bd168.firebaseapp.com",
  projectId: "fcm-web-demo-bd168",
  storageBucket: "fcm-web-demo-bd168.appspot.com",
  messagingSenderId: "1056184731984",
  appId: "1:1056184731984:web:27525693ad711b52e38455"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const googleAuth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();