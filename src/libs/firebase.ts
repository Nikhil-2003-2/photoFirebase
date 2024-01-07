// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8VnYwKaNmluJ_aeQgLC4ShjenOzTPYI",
  authDomain: "photo-gallery-4b70d.firebaseapp.com",
  projectId: "photo-gallery-4b70d",
  storageBucket: "photo-gallery-4b70d.appspot.com",
  messagingSenderId: "467173164030",
  appId: "1:467173164030:web:6790911a8b9c6fe2eab6af",
  measurementId: "G-948NM857M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);