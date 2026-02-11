// Gallery filtering functionality
let activeCategory = 'all';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1727199433272-70fdb94c8430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNpYyUyMGdlbCUyMG1hbmljdXJlJTIwbmFpbHN8ZW58MXx8fHwxNzY4NzQ3NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "basicGel",
    captionKey: "gallery.caption.basicGel1",
  },
  {
    url: "https://images.unsplash.com/photo-1667769462514-1fd738b38498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlsJTIwcG9saXNoJTIwY29sb3JzfGVufDF8fHx8MTc2ODc0NzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "basicGel",
    captionKey: "gallery.caption.basicGel2",
  },
  {
    url: "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBtYW5pY3VyZSUyMHBvbGlzaHxlbnwxfHx8fDE3NjM0MjczNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "basicGel",
    captionKey: "gallery.caption.basicGel3",
  },
  {
    url: "https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc2ODc0NzYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "modernArt",
    captionKey: "gallery.caption.modernArt1",
  },
  {
    url: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5haWwlMjBhcnR8ZW58MXx8fHwxNzY4NzQ3NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "modernArt",
    captionKey: "gallery.caption.modernArt2",
  },
  {
    url: "https://images.unsplash.com/photo-1737214346830-8354d4956724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmV8ZW58MXx8fHwxNzYzMzQxODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "modernArt",
    captionKey: "gallery.caption.modernArt3",
  },
  {
    url: "https://images.unsplash.com/photo-1637679185371-c5dddff8794e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG5haWwlMjBhcnQlMjBkZXNpZ258ZW58MXx8fHwxNzY4NzQ3NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "3dDesign",
    captionKey: "gallery.caption.3dDesign1",
  },
  {
    url: "https://images.unsplash.com/photo-1611923973164-e0e5f7f69872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmFsJTIwM2QlMjBuYWlsc3xlbnwxfHx8fDE3Njg3NDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "3dDesign",
    captionKey: "gallery.caption.3dDesign2",
  },
  {
    url: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwbmFpbHMlMjBkZXNpZ258ZW58MXx8fHwxNzYzNDI0MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "3dDesign",
    captionKey: "gallery.caption.3dDesign3",
  },
];

function filterGallery(category) {
  activeCategory = category;
  
  // Update button states
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-100');
      btn.classList.add('bg-black', 'text-white');
    } else {
      btn.classList.remove('bg-black', 'text-white');
      btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-100');
    }
  });
  
  // Filter and render gallery
  renderGallery();
}

function renderGallery() {
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;
  
  galleryGrid.innerHTML = filteredImages.map((image, index) => `
    <div class="relative overflow-hidden rounded-xl group aspect-square bg-white shadow-md hover:shadow-xl transition-shadow">
      <img 
        src="${image.url}" 
        alt="${t(image.captionKey)}"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <p class="text-white text-lg italic leading-relaxed" data-i18n="${image.captionKey}">
            ${t(image.captionKey)}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', function() {
  renderGallery();
});
