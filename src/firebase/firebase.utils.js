import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMwfYE5G6hJP_Z6URP5iBzLJJYPMzpdlM",
  authDomain: "shop-clothing-106.firebaseapp.com",
  databaseURL: "https://shop-clothing-106.firebaseio.com",
  projectId: "shop-clothing-106",
  storageBucket: "shop-clothing-106.appspot.com",
  messagingSenderId: "888981665236",
  appId: "1:888981665236:web:4eed393837c0abe638d241",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
