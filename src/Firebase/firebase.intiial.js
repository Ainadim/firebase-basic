import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialAuth = () => {
  initializeApp(firebaseConfig);
};

export default initialAuth;
