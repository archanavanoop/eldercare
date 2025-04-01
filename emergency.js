document.addEventListener('DOMContentLoaded', () => {
    const sendAlertBtn = document.getElementById('send-alert-btn');
    const checkMissedBtn = document.getElementById('check-missed-btn');
    const alertStatus = document.getElementById('alert-status');
    const missedStatus = document.getElementById('missed-status');
  
    // Function to simulate sending an emergency alert
    function sendEmergencyAlert() {
      alertStatus.innerHTML = "🚨 Sending emergency alert...";
  
      // Simulate alert sending process with delay
      setTimeout(() => {
        alertStatus.innerHTML = "✅ Emergency alert sent successfully!";
      }, 2000);
    }
  
    // Function to check for missed dosage and missed appointments
    function checkMissedAlerts() {
      missedStatus.innerHTML = "🔍 Checking for missed alerts...";
  
      // Simulate fetching missed data
      setTimeout(() => {
        const missedDose = Math.random() > 0.5; // 50% chance of missed dose
        const missedAppointment = Math.random() > 0.5; // 50% chance of missed appointment
  
        let alertMessage = "";
  
        if (missedDose && missedAppointment) {
          alertMessage = "⚠️ Missed Medicine Dose and Appointment!";
        } else if (missedDose) {
          alertMessage = "⚠️ Missed Medicine Dose!";
        } else if (missedAppointment) {
          alertMessage = "⚠️ Missed Appointment!";
        } else {
          alertMessage = "✅ No missed alerts. Everything is on track!";
        }
  
        missedStatus.innerHTML = alertMessage;
  
        // Optionally send alert if something is missed
        if (missedDose || missedAppointment) {
          notifyCaregiver(alertMessage);
        }
      }, 2000);
    }
  
    // Function to notify caregiver for missed events
    function notifyCaregiver(message) {
      setTimeout(() => {
        alert(`🚨 Alert sent to caregiver: ${message}`);
      }, 1000);
    }
  
    // Event listeners for button clicks
    sendAlertBtn.addEventListener('click', () => {
      sendEmergencyAlert();
    });
  
    checkMissedBtn.addEventListener('click', () => {
      checkMissedAlerts();
    });
  });
  