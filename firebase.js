import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCiiyYQ7LFLu-IClXUMZnZ36zfBVxn9rDY",
  authDomain: "dstrkttv.firebaseapp.com",
  projectId: "dstrkttv",
  storageBucket: "dstrkttv.appspot.com",
  messagingSenderId: "713394519330",
  appId: "1:713394519330:web:9fcf098f5919045be9b97b",
  measurementId: "G-Z7C2DP70P9",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
