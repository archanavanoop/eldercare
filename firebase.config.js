// filepath: c:\Users\ahame\projects\feba\eldercare\firebase.config.js
// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy2RVVkx2radPAgfG0gRYQjPpBcza0Y78",
    authDomain: "elderweb-97799.firebaseapp.com",
    projectId: "elderweb-97799",
    storageBucket: "elderweb-97799.firebasestorage.app",
    messagingSenderId: "914048219727",
    appId: "1:914048219727:web:490ed46aaec9cad0d7483a"
  };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { auth, db };