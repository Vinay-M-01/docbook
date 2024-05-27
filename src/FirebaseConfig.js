
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmaWjt9xnw4rkhb6ctqVnrVuMqxogIZ_g",
  authDomain: "docbook-9d38a.firebaseapp.com",
  projectId: "docbook-9d38a",
  storageBucket: "docbook-9d38a.appspot.com",
  messagingSenderId: "360858063049",
  appId: "1:360858063049:web:8995aa6dcb08ef275f3d18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app);

export { auth, storage };