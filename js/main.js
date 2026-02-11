// Main JavaScript file for general functionality

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				const headerOffset = 80;
				const elementPosition = target.getBoundingClientRect().top;
				const offsetPosition =
					elementPosition + window.pageYOffset - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		});
	});

	// Mobile menu toggle (if you want to add mobile menu later)
	const mobileMenuButton = document.getElementById("mobile-menu-button");
	const mobileMenu = document.getElementById("mobile-menu");

	if (mobileMenuButton && mobileMenu) {
		mobileMenuButton.addEventListener("click", function () {
			mobileMenu.classList.toggle("hidden");
		});
	}

	// EmailJS Form submission handler
	const bookingForm = document.getElementById("booking-form");
	if (bookingForm) {
		bookingForm.addEventListener("submit", function (e) {
			e.preventDefault();

			// Get submit button
			const submitBtn = document.getElementById("submit-btn");
			const originalText = submitBtn.textContent;

			// Show loading state
			submitBtn.disabled = true;
			submitBtn.textContent =
				currentLanguage === "en" ? "Sending..." : "Mengirim...";

			// Send email using EmailJS
			// Replace these with your actual EmailJS credentials from emailjs.com
			const serviceID = "service_doseofnails"; // e.g., 'service_abc123'
			const templateID = "template_doseofnails"; // e.g., 'template_xyz789'

			emailjs
				.sendForm(serviceID, templateID, this)
				.then(function () {
					// Success!
					alert(
						currentLanguage === "en"
							? "✅ Thank you! We will contact you within 24 hours."
							: "✅ Terima kasih! Kami akan menghubungi Anda dalam 24 jam.",
					);

					// Reset form
					bookingForm.reset();
				})
				.catch(function (error) {
					// Error
					console.error("EmailJS Error:", error);
					alert(
						currentLanguage === "en"
							? "❌ Failed to send message. Please try again or contact us directly."
							: "❌ Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung.",
					);
				})
				.finally(function () {
					// Reset button state
					submitBtn.disabled = false;
					submitBtn.textContent = originalText;
				});
		});
	}
});

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener("scroll", function () {
	const header = document.querySelector("header");
	const currentScroll = window.pageYOffset;

	if (currentScroll > 100) {
		header.classList.add("shadow-md");
	} else {
		header.classList.remove("shadow-md");
	}

	lastScroll = currentScroll;
});
