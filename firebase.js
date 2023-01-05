import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArViGSqFXIX2AmXR2HsuqeckU7cc8dpgA",
  authDomain: "signal-clone-react-nativ-3ffda.firebaseapp.com",
  projectId: "signal-clone-react-nativ-3ffda",
  storageBucket: "signal-clone-react-nativ-3ffda.appspot.com",
  messagingSenderId: "414691986950",
  appId: "1:414691986950:web:544dd5af1d61f2704b3d87",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
