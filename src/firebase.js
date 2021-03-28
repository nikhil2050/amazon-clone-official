import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7RmlTC1-Wy1ROr1LQiVQ32AIgPUk3u9A",
    authDomain: "clone-official-10fb1.firebaseapp.com",
    projectId: "clone-official-10fb1",
    storageBucket: "clone-official-10fb1.appspot.com",
    messagingSenderId: "612487662378",
    appId: "1:612487662378:web:9c4613692353b10cf8ec53",
    measurementId: "G-GVYPBSEP6W"
  });

  const db = firebase.firestore();

  export {db}
  