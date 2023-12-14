import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBW78gEdZHKylNQOldrwX-AW9SFn0uh0V8",
  authDomain: "next-cod-hub.firebaseapp.com",
  projectId: "next-cod-hub",
  storageBucket: "next-cod-hub.appspot.com",
  messagingSenderId: "228384996660",
  appId: "1:228384996660:web:92416633e2f76066477961",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
