/* -----------------------------------------
  Have focus outline only for keyboard users 
---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');

  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);


/* -----------------------------------------
  Back to top button visibility on scroll
---------------------------------------- */

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

const alterStyles = (isVisible) => {
  backToTopButton.style.visibility = isVisible ? "visible" : "hidden";
  backToTopButton.style.opacity = isVisible ? 1 : 0;
  backToTopButton.style.transform = isVisible ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  isBackToTopRendered = window.scrollY > 700;
  alterStyles(isBackToTopRendered);
});


/* -----------------------------------------
  Light / Dark Mode Toggle with localStorage
---------------------------------------- */

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('light-mode') ? 'light' : 'dark'
  );
}

// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }
});
