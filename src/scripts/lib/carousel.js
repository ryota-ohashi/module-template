import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

export default function carousel() {
	const sliderElement = document.querySelector('.js-carousel');
	if (!sliderElement) return;
	const slider = new KeenSlider(sliderElement, {
		loop: true,
		slides: {
			perView: window.innerWidth <= 767 ? 1 : 2,
			spacing: 16,
		},
		defaultAnimation: {
			duration: 500
		}
	});

	// 前へボタン
	const prevButton = document.querySelector('.js-carousel-prev');
	if (prevButton) {
		prevButton.addEventListener('click', () => {
			slider.prev();
		});
	}

	// 次へボタン
	const nextButton = document.querySelector('.js-carousel-next');
	if (nextButton) {
		nextButton.addEventListener('click', () => {
			slider.next();
		});
	}

	// スライダーの破棄
	return () => {
		if (slider) slider.destroy();
	};
}
