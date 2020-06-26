import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAz8-0lx7A5Rm4qUSNyYbEQ5iZOiesb-cE",
    authDomain: "fir-auth-tutorial-9286b.firebaseapp.com",
    databaseURL: "https://fir-auth-tutorial-9286b.firebaseio.com",
    projectId: "fir-auth-tutorial-9286b",
    storageBucket: "fir-auth-tutorial-9286b.appspot.com",
    messagingSenderId: "38012856642",
    appId: "1:38012856642:web:e4f1e80b9f0aad0ad3c0db",
    measurementId: "G-9XG370V7FV"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);
  firebase.analytics();
  export default fire;