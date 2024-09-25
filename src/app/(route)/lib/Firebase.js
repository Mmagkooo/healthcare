import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBDw5y5iXQvEY2KMql78CoEHizslbwQ9h8",
    authDomain: "doctor-app-12a47.firebaseapp.com",
    projectId: "doctor-app-12a47",
    storageBucket: "doctor-app-12a47.appspot.com",
    messagingSenderId: "322452332166",
    appId: "1:322452332166:web:4d3455507bf7b54deffb07",
    measurementId: "G-QP9S9GSSRG"
    
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
