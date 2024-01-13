import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwERfkis2nhuAjE_eUR_vqCCUcwSVfIzU",
    authDomain: "slack-react-clone-7d438.firebaseapp.com",
    projectId: "slack-react-clone-7d438",
    storageBucket: "slack-react-clone-7d438.appspot.com",
    messagingSenderId: "1016929727280",
    appId: "1:1016929727280:web:ee81a689d38c20d3a10ef5",
    measurementId: "G-CBFNY6NTXQ"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export { auth, provider };
  export const db = getFirestore(firebaseApp);
