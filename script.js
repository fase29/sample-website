// Simple script for Chromatic Canvas
document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    console.log('Chromatic Canvas loaded!');
    
    // Example: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
