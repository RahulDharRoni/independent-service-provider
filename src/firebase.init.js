// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApNgW3AQ0pl2_j7KBY3D2tLH1a2UjWaPA",
    authDomain: "fit-4-life-gym-53612.firebaseapp.com",
    projectId: "fit-4-life-gym-53612",
    storageBucket: "fit-4-life-gym-53612.appspot.com",
    messagingSenderId: "56194925450",
    appId: "1:56194925450:web:62b3523533253636f63e73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;