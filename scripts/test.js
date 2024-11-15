import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let deliveryDate = dayjs();

console.log(deliveryDate);

// Get the theme toggle button
const themeToggleButton = document.getElementById('themeToggle');

// Check if dark theme is already applied in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Add event listener to toggle theme
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Save the theme choice in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
