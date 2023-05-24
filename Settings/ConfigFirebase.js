//import firebase from 'firebase/app';
//import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config={
    // your information from the firebase database
    apiKey: "AIzaSyCDr9KZ8NA7oophbZ_ybh9TogWukE5vZI0",
    authDomain: "my-appdb-27b77.firebaseapp.com",
    projectId: "my-appdb-27b77",
    storageBucket: "my-appdb-27b77.appspot.com",
    messagingSenderId: "1060812004122",
    appId: "1:1060812004122:web:51eccb40caebe9fddfaaa3",
    measurementId: "G-4JCXBWP444"
}

//const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()
//export default fb;

const app = initializeApp(config);
export const firebase = getDatabase(app);




