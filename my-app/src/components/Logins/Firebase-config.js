import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTOO1fHQ8B7fMcvmiGa2PbSY0_0NuVihU",
    authDomain: "sih-2023-1d46f.firebaseapp.com",
    projectId: "sih-2023-1d46f",
    storageBucket: "sih-2023-1d46f.appspot.com",
    messagingSenderId: "1054421688507",
    appId: "1:1054421688507:web:a342e0e49cc8d217cec99e",
    measurementId: "G-KN32TR5EF8"
  };

  const app=initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const auth = getAuth(app);