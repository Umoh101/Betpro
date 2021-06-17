import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDzmwbjIwxGvAbSLvt3PV1MjOkbyVGGycE",
  authDomain: "bet101.firebaseapp.com",
  projectId: "bet101",
  storageBucket: "bet101.appspot.com",
  messagingSenderId: "539580714927",
  appId: "1:539580714927:web:2295ce1fd0ac3750f6e95a"
})

//npm install -g firebase-tools for deployment
// first steps 
// firebase login 
// firebase init // Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:
// firebase deploy 