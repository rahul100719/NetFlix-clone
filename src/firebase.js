import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBs9y60775NxC615yKQ9gpEL9vMPGLog4I",
    authDomain: "netflix-clone-1be5c.firebaseapp.com",
    projectId: "netflix-clone-1be5c",
    storageBucket: "netflix-clone-1be5c.appspot.com",
    messagingSenderId: "57252501966",
    appId: "1:57252501966:web:7b829088ac734a7828b39f",
    measurementId: "G-CXF65ZSS8Y"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  export {auth};
  export default db;