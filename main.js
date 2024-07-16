// Wait for content on the page to load
window.addEventListener("DOMContentLoaded", () => {
	// Get all carousels on the page
	const carousels = document.querySelectorAll(".infinite-carousel");

	// Set direction for each carousel (column)
	const direction = ["normal", "reverse", "normal", "reverse"];

	// Set speed for each carousel
	const speed = [35, 50, 30, 42];

	// Loop through each carousel
	carousels.forEach((carousel, index) => {
		// Get the inner div of each carousel
		const carouselInner = carousel.querySelector(".infinite-carousel div");
		// Get the inner content (images) from the carousel
		const carouselContent = Array.from(carouselInner.children);
		// Loop through each image in the carousel
		carouselContent.forEach((item) => {
			// duplicate each item
			const duplicateItem = item.cloneNode(true);
			// append the duplicate item to the carousel
			carouselInner.appendChild(duplicateItem);
		});

		// Add animation to the carousel
		carouselInner.style.animation = `move ${speed[index]}s linear infinite ${direction[index]}`;

		/* If we add it it the CSS and not here, the animation will be applied before the item are duplicated, and it will not work properly */
	});
});
