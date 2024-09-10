// Select the navbar
const navbar = document.getElementById('navbar');

// Function to add or remove the 'scrolled' class based on the scroll position
window.onscroll = function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
