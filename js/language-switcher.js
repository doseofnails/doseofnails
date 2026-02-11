// Language switcher functionality
let currentLanguage = 'en';

function t(key) {
  return translations[currentLanguage][key] || key;
}

function updateContent() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key);
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translation;
    } else {
      // Handle line breaks in translations
      if (translation.includes('\n')) {
        element.innerHTML = translation.replace(/\n/g, '<br>');
      } else {
        element.textContent = translation;
      }
    }
  });
  
  // Update language display
  const langDisplay = document.getElementById('language-display');
  if (langDisplay) {
    langDisplay.textContent = currentLanguage.toUpperCase();
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
  updateContent();
  
  // Save preference
  localStorage.setItem('preferredLanguage', currentLanguage);
}

function setLanguage(lang) {
  currentLanguage = lang;
  updateContent();
  localStorage.setItem('preferredLanguage', currentLanguage);
  
  // Close dropdown
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
  }
}

function toggleDropdown() {
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('language-dropdown');
  const button = document.getElementById('language-button');
  
  if (dropdown && button && !button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Load saved language preference
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
  }
  
  updateContent();
});
