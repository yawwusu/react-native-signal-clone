import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhgH4bbYzLsAwX0pyiPW0q8PfOnrSVUoc",
  authDomain: "signal-clone-mobile.firebaseapp.com",
  projectId: "signal-clone-mobile",
  storageBucket: "signal-clone-mobile.appspot.com",
  messagingSenderId: "622579291469",
  appId: "1:622579291469:web:5f3af1b42d74ab9e60d304",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };
