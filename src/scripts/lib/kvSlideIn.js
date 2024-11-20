export default function kvSlideIn(){
	const slideInElements = document.querySelectorAll('.js-kv-slide-in');
	slideInElements.forEach(element => {
		element.classList.add('is-show');
	});
}
