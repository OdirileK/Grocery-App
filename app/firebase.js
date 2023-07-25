// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn3Kep7HNch1z49BDe3GABYBd2NRDUnvk",
  authDomain: "grocery-app-27654.firebaseapp.com",
  projectId: "grocery-app-27654",
  storageBucket: "grocery-app-27654.appspot.com",
  messagingSenderId: "1066947238439",
  appId: "1:1066947238439:web:cc30bcb907c3824643cc02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authorisation = getAuth(app)

