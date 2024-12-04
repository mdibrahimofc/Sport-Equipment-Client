// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPCQFzpf4-d-77H3ksCmjoLA7Enn_SEVM",
  authDomain: "equisports-202b4.firebaseapp.com",
  projectId: "equisports-202b4",
  storageBucket: "equisports-202b4.firebasestorage.app",
  messagingSenderId: "1096263997908",
  appId: "1:1096263997908:web:e17a969df475d5a32e5e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);