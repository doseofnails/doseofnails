// Tab switching functionality for Services & Products
function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.remove('bg-transparent', 'text-gray-700');
      btn.classList.add('bg-white', 'shadow-sm');
    } else {
      btn.classList.remove('bg-white', 'shadow-sm');
      btn.classList.add('bg-transparent', 'text-gray-700');
    }
  });
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    if (content.dataset.tab === tabName) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Set default tab
  switchTab('services');
});
