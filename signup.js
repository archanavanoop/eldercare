import { auth, db } from "./firebase.config.js";

// Handle signup form submission
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get form values
  const name = signupForm['fullname'].value.trim();
  const email = signupForm['email'].value.trim();
  const password = signupForm['password'].value.trim();
  const role = signupForm['role'].value;

  try {
    // Create user with Firebase Authentication
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Save additional user data to Firestore
    await db.collection('users').doc(user.uid).set({
      name,
      email,
      role,
      createdAt: new Date().toISOString(),
    });

    alert('✅ Account created successfully! Redirecting to login...');
    window.location.href = 'login.html'; // Redirect to login page
  } catch (error) {
    console.error('Error during signup:', error);
    alert(`❌ Signup failed: ${error.message}`);
  }
});
