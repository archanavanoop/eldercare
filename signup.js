// Handle signup form submission
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = signupForm['fullname'].value;
  const username = signupForm['username'].value;
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  const role = signupForm['role'].value;

  // Create user data object
  const userData = {
    id: Date.now(), // Unique ID for the user
    name,
    username,
    email,
    password,
    role,
    createdAt: new Date().toISOString(),
  };

  // Get existing users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Check if user with the same email or username already exists
  const userExists = existingUsers.some(
    (user) => user.email === email || user.username === username
  );

  if (userExists) {
    alert('❌ User with this email or username already exists. Please use a different one.');
  } else {
    // Add new user to the list
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('✅ Account created successfully! Redirecting to login...');
    window.location.href = 'login.html'; // Redirect to login page
  }
});
