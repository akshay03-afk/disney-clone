// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2odGJsmOZK8Q6ujxF8D8uGa0p9hakMPg",
  authDomain: "disneyplus-clone-11a2d.firebaseapp.com",
  projectId: "disneyplus-clone-11a2d",
  storageBucket: "disneyplus-clone-11a2d.appspot.com",
  messagingSenderId: "275556714246",
  appId: "1:275556714246:web:3904522e79416b390c4087",
  measurementId: "G-0XTYXR4S12"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;