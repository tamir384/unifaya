import firebase from "firebase/app";
import "firebase/auth";
import storage from 'firebase/storage';
import firestore from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDz9stsPK8GNUpd1sC8u6VLjTJb-F7_TfM",
    authDomain: "unifaya-official.firebaseapp.com",
    databaseURL: "https://unifaya-official-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "unifaya-official",
    storageBucket: "unifaya-official.appspot.com",
    messagingSenderId: "674123166469",
    appId: "1:674123166469:web:eaaeb327d88fba30c1fd6c"
};

firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(async user => {
    window.user = await firebase.auth().currentUser;
    if (!window.user) {
        localStorage.setItem('uid',JSON.stringify(false))
        localStorage.setItem('user',JSON.stringify(false))
    } else {
        localStorage.setItem('uid', user.uid);
        localStorage.setItem('user', JSON.stringify(user));
    }
})

export default {
    firebase
}