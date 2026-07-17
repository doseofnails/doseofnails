// Gallery filtering functionality
let activeCategory = "all";

const galleryImages = [
	{
		url: "img/basic/basic_1.jpeg",
		category: "basic",
		captionKey: "gallery.caption.basic1",
	},
	{
		url: "img/basic/basic_2.jpeg",
		category: "basic",
		captionKey: "gallery.caption.basic2",
	},
	{
		url: "img/basic/basic_3.jpeg",
		category: "basic",
		captionKey: "gallery.caption.basic3",
	},
	{
		url: "img/moderate/moderate_1.jpeg",
		category: "moderate",
		captionKey: "gallery.caption.moderate1",
	},
	{
		url: "img/moderate/moderate_2.jpeg",
		category: "moderate",
		captionKey: "gallery.caption.moderate2",
	},
	{
		url: "img/moderate/moderate_3.jpeg",
		category: "moderate",
		captionKey: "gallery.caption.moderate3",
	},
	{
		url: "img/advanced/advanced_1.jpeg",
		category: "advanced",
		captionKey: "gallery.caption.advanced1",
	},
	{
		url: "img/advanced/advanced_2.jpeg",
		category: "advanced",
		captionKey: "gallery.caption.advanced2",
	},
	{
		url: "img/advanced/advanced_3.jpeg",
		category: "advanced",
		captionKey: "gallery.caption.advanced3",
	},
];

function filterGallery(category) {
	activeCategory = category;

	// Update button states
	document.querySelectorAll(".gallery-filter-btn").forEach((btn) => {
		if (btn.dataset.category === category) {
			btn.classList.remove("bg-white", "text-gray-700", "hover:bg-gray-100");
			btn.classList.add("bg-black", "text-white");
		} else {
			btn.classList.remove("bg-black", "text-white");
			btn.classList.add("bg-white", "text-gray-700", "hover:bg-gray-100");
		}
	});

	// Filter and render gallery
	renderGallery();
}

function renderGallery() {
	const filteredImages =
		activeCategory === "all"
			? galleryImages
			: galleryImages.filter((img) => img.category === activeCategory);

	const galleryGrid = document.getElementById("gallery-grid");
	if (!galleryGrid) return;

	galleryGrid.innerHTML = filteredImages
		.map(
			(image, index) => `
    <div class="relative overflow-hidden rounded-xl group aspect-square bg-white shadow-md hover:shadow-xl transition-shadow">
      <img
        src="${image.url}"
        alt="${translateKey(image.captionKey)}"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <p class="text-white text-lg italic leading-relaxed" data-i18n="${image.captionKey}">
            ${translateKey(image.captionKey)}
          </p>
        </div>
      </div>
    </div>
  `,
		)
		.join("");
}

// Initialize gallery on page load
document.addEventListener("DOMContentLoaded", function () {
	renderGallery();
});
