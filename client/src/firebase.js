import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKft9Q8nSm0sgSUD8LVSB96kawRvG5iJE",
  authDomain: "clone-e0516.firebaseapp.com",
  projectId: "clone-e0516",
  storageBucket: "clone-e0516.appspot.com",
  messagingSenderId: "132127228121",
  appId: "1:132127228121:web:aa2028d6ff8039d3617ec8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
