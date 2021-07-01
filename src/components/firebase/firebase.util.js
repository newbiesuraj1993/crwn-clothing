import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCz6za3YDzMGuT40mIx-FoIX7m5EUmJrmI",
    authDomain: "crwn-clthng-f104b.firebaseapp.com",
    projectId: "crwn-clthng-f104b",
    storageBucket: "crwn-clthng-f104b.appspot.com",
    messagingSenderId: "178734211584",
    appId: "1:178734211584:web:e2e08273fa1696ded36ee5",
    measurementId: "G-F8B9J726RQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;