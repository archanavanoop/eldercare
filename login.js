import { auth, db } from "./firebase.config.js";

// Handle login form submission
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get form values
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  try {
    // Authenticate user with Firebase Authentication
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Optionally, fetch additional user data from Firestore
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      console.log('User data:', userData);

      // Store session data (optional)
      sessionStorage.setItem('loggedInUser', JSON.stringify(userData));

      alert('✅ Login successful! Redirecting to the dashboard...');
      window.location.href = 'pages/dashboard.html'; // Redirect to dashboard page
    } else {
      alert('❌ User data not found in Firestore.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert(`❌ Login failed: ${error.message}`);
  }
});
