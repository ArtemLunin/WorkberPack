import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";

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

export const firebaseAuth = (providerName) => {
  let provider = null;
  switch (providerName) {
    case 'google':
        provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      break;
    case 'twitter':
        provider = new TwitterAuthProvider();
        break;
    default:
        return false;
        break;
  }
  const auth = getAuth(app);
  const userUID = signInWithPopup(auth, provider)
    .then((result) => {
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
};

export const firebaseGoogleAuth = () => {
  
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');

  const auth = getAuth(app);
  const userUID = signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
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
};

export const firebaseTwitterAuth = () => {
  const provider = new TwitterAuthProvider();
  const auth = getAuth(app);
  const userUID = signInWithPopup(auth, provider)
  .then((result) => {
    // const credential = TwitterAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const secret = credential.secret;

    const user = result.user;
    return user.uid;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = TwitterAuthProvider.credentialFromError(error);
    return false;
  });
  return userUID;
}
