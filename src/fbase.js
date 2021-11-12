import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDpDX9lLpKhL6mzgU-mXhMKbJQbmTvXDdk",
    authDomain: "nwitter-859e1.firebaseapp.com",
    projectId: "nwitter-859e1",
    storageBucket: "nwitter-859e1.appspot.com",
    messagingSenderId: "169077756053",
    appId: "1:169077756053:web:7f6b42dce21993e3e18b9c"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();