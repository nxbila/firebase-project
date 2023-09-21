// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANUH54Fz19B3JElRuAQ-i78jspCHNimMw",
    authDomain: "create-deploy-table.firebaseapp.com",
    projectId: "create-deploy-table",
    storageBucket: "create-deploy-table.appspot.com",
    messagingSenderId: "395547752704",
    appId: "1:395547752704:web:6c73cd20e67311525edbe5",
    measurementId: "G-DKT91RG80D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
