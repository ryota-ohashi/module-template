import "../styles/main.scss";
import kvSlideIn from "./lib/kvSlideIn";
import carousel from "./lib/carousel";
import accordion from "./lib/accordion";
import tabMenu from "./lib/tabMenu";
import modal from "./lib/modal";
import scrollTop from "./lib/scrollTop";
import anchorLink from "./lib/anchorLink";
import spNav from "./lib/spNav";

const main = () => {

	kvSlideIn();
	carousel();
	modal();
	scrollTop();
	anchorLink();

	// スマホメニュー
	spNav();

	// タブメニュー
	const tabEl = document.querySelector('.js-tab');
	tabMenu(tabEl);

	// アコーディオン
	const accordionEl = document.querySelector('.js-accordion');
	accordion(accordionEl);
};

document.addEventListener("DOMContentLoaded", function () {
	main();
});
