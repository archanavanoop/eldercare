// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('userData'));
  
    // Check if user exists and credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('✅ Login successful! Redirecting to the dashboard...');
      
      // Store session data (optional)
      sessionStorage.setItem('loggedInUser', JSON.stringify({ email: email }));
  
      // Redirect to dashboard page
      window.location.href = 'pages/dashboard.html'; // Update path as needed
    } else {
      alert('❌ Invalid email or password. Please try again!');
    }
  });
  