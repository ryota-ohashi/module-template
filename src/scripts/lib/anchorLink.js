export default function anchorLink() {
	const anchorLinks = document.querySelectorAll('a[href^="#"]');
	const header = document.querySelector('header');
	const headerHeight = header ? header.offsetHeight : 0;

	anchorLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
			const href = link.getAttribute('href');
			const target = document.querySelector(href);

			if (!target) return;

			const targetPosition = target.getBoundingClientRect().top;
			const offsetPosition = window.scrollY;
			const targetOffset = targetPosition + offsetPosition - headerHeight;

			window.scrollTo({
				top: targetOffset,
				behavior: 'smooth'
			});
		});
	});
}
