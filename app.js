function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark');

  // Save preference
  const isDark = body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  
  updateStatus();
}

function updateStatus() {
  const isDark = document.body.classList.contains('dark');
  document.getElementById('status').textContent = 
    `Current theme: ${isDark ? 'Dark' : 'Light'}`;
}

// On page load, restore preference
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true') {
    document.body.classList.add('dark');
  }
  updateStatus();
});
