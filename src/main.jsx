import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_5cAZQv18CF7ZaDp80eEn4rzI2WF_MDE",
  authDomain: "gojo-store.firebaseapp.com",
  projectId: "gojo-store",
  storageBucket: "gojo-store.appspot.com",
  messagingSenderId: "460304513373",
  appId: "1:460304513373:web:e6eb2f29afb51d38fad0b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
