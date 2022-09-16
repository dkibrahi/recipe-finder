import firebase from 'firebase/app';
import 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyDOPeQrt8PpXEj6Q7jlvjDSDcx3iTR2eZg",
  authDomain: "cookingsite-ae5ab.firebaseapp.com",
  projectId: "cookingsite-ae5ab",
  storageBucket: "cookingsite-ae5ab.appspot.com",
  messagingSenderId: "933061022654",
  appId: "1:933061022654:web:0c33f50b6f9eff5cdc1fef"
};

// firebase init
firebase.initializeApp(firebaseConfig);

// services init
const projFirestore = firebase.firestore();

export { projFirestore };
