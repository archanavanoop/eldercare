// voice.js

// Check if browser supports Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert('❌ Your browser does not support speech recognition. Please use a modern browser like Google Chrome.');
} else {
  console.log("✅ Speech recognition is supported.");

  // Create a new instance of SpeechRecognition
  const recognition = new SpeechRecognition();
  const statusElement = document.getElementById('status');
  const outputElement = document.getElementById('output');
  const startBtn = document.getElementById('start-btn');

  // Enable continuous listening
  recognition.continuous = true; // Continuous listening until manually stopped
  recognition.interimResults = false; // Only show final result
  recognition.lang = 'en-US'; // Set language to English

  // Start Listening when button is clicked
  startBtn.addEventListener('click', () => {
    recognition.start();
    statusElement.textContent = '🎤 Listening... Please speak a command.';
  });

  // Process the speech input when recognized
  recognition.onresult = (event) => {
    const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
    outputElement.innerHTML = `<strong>✅ You said:</strong> "${command}"`;

    // Handle the recognized command
    handleCommand(command);
  };

  // Function to handle commands
  function handleCommand(command) {
    if (command.includes('open home')) {
      window.location.href = 'index.html';
    } else if (command.includes('open profile')) {
      window.location.href = 'profile.html';
    } else if (command.includes('open medicine')) {
      window.location.href = 'medicine.html';
    } else if (command.includes('open appointment')) {
      window.location.href = 'appointment.html';
    } else if (command.includes('open emergency')) {
      window.location.href = 'emergency.html';
    } else if (command.includes('open health')) {
      window.location.href = 'health.html';
    } else if (command.includes('stop listening')) {
      recognition.stop();
      statusElement.textContent = '🛑 Voice recognition stopped.';
    } else {
      outputElement.innerHTML += `<br><span style="color: red;">❌ Unknown command. Please try again.</span>`;
    }
  }

  // Handle speech recognition errors
  recognition.onerror = (event) => {
    console.error("Error:", event.error);
    statusElement.textContent = `❌ Error occurred: ${event.error}`;
  };

  // Handle when listening stops
  recognition.onend = () => {
    statusElement.textContent = '🔁 Listening stopped. Click the button to start again.';
  };
}
