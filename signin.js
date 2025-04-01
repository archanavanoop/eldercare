import { auth } from "./firebase.config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const signinForm = document.getElementById('signin-form');

signinForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('signin-email').value.trim();
  const password = document.getElementById('signin-password').value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    alert('✅ Login successful! Redirecting to your profile...');
    window.location.href = 'profile.html'; // Redirect to profile page
  } catch (error) {
    console.error('Error during login:', error);
    alert(`❌ Login failed: ${error.message}`);
  }
});
