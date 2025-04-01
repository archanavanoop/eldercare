// Select form and list elements
const medicineForm = document.getElementById('medicine-form');
const medicineList = document.getElementById('medicine-list');

// Load existing reminders from localStorage on page load
document.addEventListener('DOMContentLoaded', loadReminders);

// Listen for form submission to add a new reminder
medicineForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const medicineName = document.getElementById('medicine-name').value;
  const dosage = document.getElementById('dosage').value;
  const reminderTime = document.getElementById('reminder-time').value;

  // Validate input
  if (!medicineName || !reminderTime) {
    alert('Please enter both medicine name and reminder time.');
    return;
  }

  // Create reminder object
  const reminder = {
    id: Date.now().toString(),
    medicineName,
    dosage,
    reminderTime,
  };

  // Save reminder to localStorage
  addMedicineReminder(reminder);

  // Clear form fields
  medicineForm.reset();
});

// Function to add medicine reminder to localStorage
function addMedicineReminder(reminder) {
  const reminders = getReminders();
  reminders.push(reminder);
  localStorage.setItem('medicines', JSON.stringify(reminders));
  console.log('Medicine reminder added successfully!');
  loadReminders(); // Reload reminders after adding
}

// Function to load reminders from localStorage
function loadReminders() {
  const reminders = getReminders();
  medicineList.innerHTML = ''; // Clear the existing list

  reminders.forEach(reminder => {
    const reminderItem = document.createElement('div');
    reminderItem.classList.add('reminder-item');
    reminderItem.innerHTML = `
      <p><strong>${reminder.medicineName}</strong> (${reminder.dosage}) at ${reminder.reminderTime}</p>
      <button class="delete-btn" onclick="deleteReminder('${reminder.id}')">❌ Delete</button>
    `;
    medicineList.appendChild(reminderItem);
  });
}

// Function to get reminders from localStorage
function getReminders() {
  const reminders = localStorage.getItem('medicines');
  return reminders ? JSON.parse(reminders) : [];
}

// Function to delete reminder from localStorage
function deleteReminder(reminderId) {
  let reminders = getReminders();
  reminders = reminders.filter(reminder => reminder.id !== reminderId);
  localStorage.setItem('medicines', JSON.stringify(reminders));
  console.log('Medicine reminder deleted successfully!');
  loadReminders(); // Reload the list after deletion
}
