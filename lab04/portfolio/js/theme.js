// Bonus: light/dark toggle with data-bs-theme on <html>
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  root.setAttribute('data-bs-theme', theme);
  toggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

let saved = null;
try {
  saved = localStorage.getItem('theme');
} catch (e) {
  // storage not available – just use the default
}
applyTheme(saved === 'dark' ? 'dark' : 'light');

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    // ignore
  }
});
