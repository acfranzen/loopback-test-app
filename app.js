// BUG: Saves to 'darkMode' but reads from 'dark_mode' — persistence is broken!
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark');
  
  // Save preference (wrong key - saves as 'darkMode')
  const isDark = body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  
  updateStatus();
}

function updateStatus() {
  const isDark = document.body.classList.contains('dark');
  document.getElementById('status').textContent = 
    `Current theme: ${isDark ? 'Dark' : 'Light'}`;
}

// On page load, restore preference (reads wrong key 'dark_mode')
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('dark_mode'); // BUG: should be 'darkMode'
  if (saved === 'true') {
    document.body.classList.add('dark');
  }
  updateStatus();
});
