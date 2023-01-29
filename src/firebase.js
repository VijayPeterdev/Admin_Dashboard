import firebase from "firebase/compat/app";
import  "firebase/compat/storage";

// 1st step firebase import

// 2nd step Firebase Config  paste

const firebaseConfig = {
  apiKey: "process.env.firebaseAPi",
  authDomain: "netflix-12f69.firebaseapp.com",
  projectId: "netflix-12f69",
  storageBucket: "netflix-12f69.appspot.com",
  messagingSenderId: "57105405871",
  appId: "1:57105405871:web:eea05ef9f36d33e968c15a",
  measurementId: "G-Y93D9689NC",
};

// 3rd step initializeApp
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
