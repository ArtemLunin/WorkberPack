import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const firebaseGoogleAuth = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDnsuNDBZFY2hL4i-kR9wDCuQN5SUenOWE",
    authDomain: "workber-9f268.firebaseapp.com",
    databaseURL: "https://workber-9f268.firebaseio.com",
    projectId: "workber-9f268",
    storageBucket: "workber-9f268.appspot.com",
    messagingSenderId: "248510692962",
    appId: "1:248510692962:web:7c8ce1ebaa8ee2ca1fdb3b"
  };

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');

  const auth = getAuth(app);
  const userUID = signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    return user.uid;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    return false;
    });

  return userUID;
}