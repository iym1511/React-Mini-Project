// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh03BMWg_LpEO41Qcn5-Xq9fkNdeMj1dQ",
  authDomain: "blog-react-c0db2.firebaseapp.com",
  projectId: "blog-react-c0db2",
  storageBucket: "blog-react-c0db2.appspot.com",
  messagingSenderId: "481231242954",
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
