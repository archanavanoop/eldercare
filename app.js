// ✅ Handle Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get the values from the form
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    console.log(`Login Attempt: Email - ${email}, Password - ${password}`);
  
    // ✅ Simple mock login logic (replace with actual authentication logic)
    const mockCredentials = {
      email: "test@example.com",
      password: "password123"
    };
  
    // Check if credentials match the mock values
    if (email === mockCredentials.email && password === mockCredentials.password) {
      console.log("✅ Login successful");
  
      // Store login information in sessionStorage or localStorage
      sessionStorage.setItem('user', JSON.stringify({ email: email }));
  
      // Redirect to dashboard or another page after login
      window.location.href = "pages/dashboard.html"; // Update to the correct path
    } else {
      console.error("❌ Invalid credentials");
      alert("Login failed: Invalid email or password");
    }
  });
  