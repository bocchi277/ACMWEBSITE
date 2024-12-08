// JavaScript to handle menu toggle
const menuBtn = document.getElementById('menu-btn');
const dropdownLinks = document.getElementById('dropdown-links');

menuBtn.addEventListener('click', () => {
  dropdownLinks.classList.toggle('active');
});
