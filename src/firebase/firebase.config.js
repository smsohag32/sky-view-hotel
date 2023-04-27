// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://sky-view-hotel-b8d8e.firebaseapp.com/__/auth/handler
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaRybgM9ZfK_IldMA1lkRnfffxSM0W46s",
  authDomain: "sky-view-hotel-b8d8e.firebaseapp.com",
  projectId: "sky-view-hotel-b8d8e",
  storageBucket: "sky-view-hotel-b8d8e.appspot.com",
  messagingSenderId: "302370530381",
  appId: "1:302370530381:web:6c2a4c61f205d19c116804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;