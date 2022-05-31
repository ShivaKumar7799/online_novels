
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyBR6ekqdibJCKEfXHztfLe_75drzg2L8iw",

  authDomain: "online-novels-login.firebaseapp.com",

  projectId: "online-novels-login",

  storageBucket: "online-novels-login.appspot.com",

  messagingSenderId: "583719927395",

  appId: "1:583719927395:web:49046d8c398b25b5398256"
  
};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;