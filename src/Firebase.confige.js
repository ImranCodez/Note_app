// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDaLKWLPoCDMiIuzdEFJxfxo5WjnoaC8XQ",
  authDomain: "note-81d65.firebaseapp.com",
  projectId: "note-81d65",
  storageBucket: "note-81d65.firebasestorage.app",
  messagingSenderId: "82962157208",
  appId: "1:82962157208:web:9dbe2774728ec9c4640aed",
  measurementId: "G-SQ217EWPH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);








export default app