// appointment-reminder.js

// DOM Elements
const form = document.getElementById('appointment-form');
const appointmentList = document.getElementById('appointment-list');

// Array to store reminders
let appointments = [];

// Load saved reminders on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedAppointments = localStorage.getItem('appointments');
  if (savedAppointments) {
    appointments = JSON.parse(savedAppointments);
    displayAppointments();
  }
});

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const doctorName = document.getElementById('doctor-name').value;
  const appointmentDate = document.getElementById('appointment-date').value;
  const appointmentTime = document.getElementById('appointment-time').value;

  // Create appointment object
  const appointment = {
    doctorName,
    date: appointmentDate,
    time: appointmentTime,
  };

  // Add to appointments array
  appointments.push(appointment);

  // Save to local storage
  localStorage.setItem('appointments', JSON.stringify(appointments));

  // Display the updated list
  displayAppointments();

  // Clear form after submission
  form.reset();
});

// Display reminders
function displayAppointments() {
  appointmentList.innerHTML = ''; // Clear the list before adding
  appointments.forEach((appointment, index) => {
    const appointmentItem = document.createElement('div');
    appointmentItem.classList.add('appointment-item');
    appointmentItem.innerHTML = `
      <p><strong>Doctor:</strong> ${appointment.doctorName}</p>
      <p><strong>Date:</strong> ${appointment.date}</p>
      <p><strong>Time:</strong> ${appointment.time}</p>
      <button onclick="deleteAppointment(${index})">❌ Delete</button>
    `;
    appointmentList.appendChild(appointmentItem);
  });
}

// Delete appointment
function deleteAppointment(index) {
  appointments.splice(index, 1); // Remove from array
  localStorage.setItem('appointments', JSON.stringify(appointments)); // Update localStorage
  displayAppointments(); // Refresh list
}
