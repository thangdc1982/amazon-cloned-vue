import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCKE9AQOHiZ2uKwY1ZodzfktOEGy7kfQoM",
  authDomain: "vue--demo.firebaseapp.com",
  projectId: "vue--demo",
  storageBucket: "vue--demo.appspot.com",
  messagingSenderId: "1098306179179",
  appId: "1:1098306179179:web:6ce20beae27796db97a12e",
  measurementId: "G-9NMMRG6V9M"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initial database (firestore)
const db = firebaseApp.firestore();

// Initialize authentication
const auth = firebase.auth();

export { db, auth };