import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC12-5Wx4G4XNDirEXlVj-osY_hx-Hu1JU",
  authDomain: "mattdaymusic-7a971.firebaseapp.com",
  projectId: "mattdaymusic-7a971",
  storageBucket: "mattdaymusic-7a971.appspot.com",
  messagingSenderId: "889027405191",
  appId: "1:889027405191:web:fd2d19c1441c18aa86df22",
  measurementId: "G-RBP91KEZG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);