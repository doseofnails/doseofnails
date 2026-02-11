// Main JavaScript file for general functionality

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mobile menu toggle (if you want to add mobile menu later)
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Form submission handler
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(currentLanguage === 'en' 
        ? 'Thank you! We will contact you within 24 hours.' 
        : 'Terima kasih! Kami akan menghubungi Anda dalam 24 jam.');
      bookingForm.reset();
    });
  }
});

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('shadow-md');
  } else {
    header.classList.remove('shadow-md');
  }
  
  lastScroll = currentScroll;
});
