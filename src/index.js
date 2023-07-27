import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMiFhbKA30OdMUrzztQjDwM1VBKLq9kCg",
  authDomain: "karlricher-portfolio.firebaseapp.com",
  projectId: "karlricher-portfolio",
  storageBucket: "karlricher-portfolio.appspot.com",
  messagingSenderId: "620773162495",
  appId: "1:620773162495:web:4cba5036a2729fb0bebbca",
  measurementId: "G-R0DL20KYYG",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
