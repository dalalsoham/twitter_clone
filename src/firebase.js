import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD28uy5VAK6PLtNCfJsWB37Fli3PG1Eu4",
    authDomain: "twitter-clone-3c2f4.firebaseapp.com",
    projectId: "twitter-clone-3c2f4",
    storageBucket: "twitter-clone-3c2f4.appspot.com",
    messagingSenderId: "1077735486707",
    appId: "1:1077735486707:web:0e598f940e4830b85c3386",
    measurementId: "G-B0E7547D2L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;