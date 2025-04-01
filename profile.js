// Load profile details when clicking 'Load Profile' button
document.getElementById('load-profile-btn').addEventListener('click', loadProfile);

// Save profile when form is submitted
document.getElementById('profile-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const emergencyContact = document.getElementById('emergency-contact').value;

  // Create an object to store data
  const profileData = {
    name,
    age,
    email,
    phone,
    emergencyContact,
  };

  // Save data to localStorage
  localStorage.setItem('profileData', JSON.stringify(profileData));
  alert('✅ Profile updated successfully!');
});

// Load profile details from localStorage
function loadProfile() {
  const profileData = JSON.parse(localStorage.getItem('profileData'));

  if (profileData) {
    const profileDetails = `
      <p><strong>Name:</strong> ${profileData.name}</p>
      <p><strong>Age:</strong> ${profileData.age}</p>
      <p><strong>Email:</strong> ${profileData.email}</p>
      <p><strong>Phone:</strong> ${profileData.phone}</p>
      <p><strong>Emergency Contact:</strong> ${profileData.emergencyContact}</p>
    `;
    document.getElementById('profile-details').innerHTML = profileDetails;
  } else {
    alert('❗ No profile found! Please fill in your details.');
  }
}
