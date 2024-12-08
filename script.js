// JavaScript to handle menu toggle
const menuBtn = document.getElementById('menu-btn');
const dropdownLinks = document.getElementById('dropdown-links');

menuBtn.addEventListener('click', () => {
  dropdownLinks.classList.toggle('active');
});
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuBtn.contains(event.target) || dropdownLinks.contains(event.target);

    if (!isClickInsideMenu) {
        dropdownLinks.classList.remove('active'); // Hide dropdown menu
    }
});