import 'firebase/auth'
import firebaseInstance from '../'

async function loginWithGoogle() {
    console.log(firebaseInstance.firebase)

    let provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
    await firebaseInstance.firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            window.user = result.user;
            // ...
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

async function signInWithEmailAndPassword(email, password) {
   await firebaseInstance.firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

export default {
    loginWithGoogle,
    signInWithEmailAndPassword
}