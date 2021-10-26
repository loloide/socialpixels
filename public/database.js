// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDstHMTKDX10g3A0sv_1kEXqpvdgKONPUE",
  authDomain: "socialpixels-2e86f.firebaseapp.com",
  databaseURL: "https://socialpixels-2e86f-default-rtdb.firebaseio.com",
  projectId: "socialpixels-2e86f",
  storageBucket: "socialpixels-2e86f.appspot.com",
  messagingSenderId: "514242334673",
  appId: "1:514242334673:web:cb1132c6cf0c2aa0121af0",
  measurementId: "G-MLB27VF9WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase