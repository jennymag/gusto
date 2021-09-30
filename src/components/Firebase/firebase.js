import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCA3gQIdetX9Qx9JP1f123wl2q9KyvYLv0",
  authDomain: "gusto-d3992.firebaseapp.com",
  projectId: "gusto-d3992",
  storageBucket: "gusto-d3992.appspot.com",
  messagingSenderId: "564419429514",
  appId: "1:564419429514:web:57963f5c690e2928b8d973",
  measurementId: "G-J31VSRGF9L",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
