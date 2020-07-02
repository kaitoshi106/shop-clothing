import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMwfYE5G6hJP_Z6URP5iBzLJJYPMzpdlM",
    authDomain: "shop-clothing-106.firebaseapp.com",
    databaseURL: "https://shop-clothing-106.firebaseio.com",
    projectId: "shop-clothing-106",
    storageBucket: "shop-clothing-106.appspot.com",
    messagingSenderId: "888981665236",
    appId: "1:888981665236:web:4eed393837c0abe638d241",
};
firebase.initializeApp(config);