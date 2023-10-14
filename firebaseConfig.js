import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBAwOeHpGEHcgobRQwLKCwoYrya1b4ASvU",
    authDomain: "zzzz-7535f.firebaseapp.com",
    databaseURL: "https://zzzz-7535f.firebaseio.com",
    projectId: "zzzz-7535f",
    storageBucket: "zzzz-7535f.appspot.com",
    messagingSenderId: "627489128672",
    appId: "1:627489128672:web:de2b87273d2249bda85085",
    measurementId: "G-WTVH2CMPPE"
  };
  export const app = initializeApp(firebaseConfig);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
