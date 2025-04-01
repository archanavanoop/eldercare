import { auth, db } from "./firebase.config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = signupForm['fullname'].value.trim();
  const email = signupForm['email'].value.trim();
  const password = signupForm['password'].value.trim();
  const role = signupForm['role'].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(collection(db, 'users'), user.uid), {
      name,
      email,
      role,
      createdAt: new Date().toISOString(),
    });

    alert('✅ Signup successful! Redirecting to the login page...');
    window.location.href = 'signin.html';
  } catch (error) {
    console.error('Error during signup:', error);
    alert(`❌ Signup failed: ${error.message}`);
  }
});