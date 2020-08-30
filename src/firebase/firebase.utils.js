import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBs5F7ejykRhjdZ7P0PhS8PfKquFZqrTsg",
  authDomain: "crwn-db-88cf5.firebaseapp.com",
  databaseURL: "https://crwn-db-88cf5.firebaseio.com",
  projectId: "crwn-db-88cf5",
  storageBucket: "crwn-db-88cf5.appspot.com",
  messagingSenderId: "515042070880",
  appId: "1:515042070880:web:532ddeb901816d36038e05",
  measurementId: "G-E6DX6FM8X5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
