// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD98ByDhw_cSE66XRIPnCBlGAgVO5UDt8w",
  authDomain: "barbershop-2e067.firebaseapp.com",
  projectId: "barbershop-2e067",
  storageBucket: "barbershop-2e067.appspot.com",
  messagingSenderId: "773202419127",
  appId: "1:773202419127:web:23a5deabcf73993d965c32",
  measurementId: "G-YG26GEP7HL"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
export default firebase;
