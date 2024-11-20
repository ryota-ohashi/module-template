export default function spNav() {

  const params = {
    naOpenClass: 'is-open',
    naClickOpenClass: 'js-spnav-open',
    naClickCloseClass: 'js-spnav-close',
    naClickCloseSubClass: 'js-spnav-sub-close'
  };

  const elSpNavOpen = document.querySelector('.' + params.naClickOpenClass);
  const elSpNavClose = document.querySelector('.' + params.naClickCloseClass);
  const elSpNavSubClose = document.querySelector('.' + params.naClickCloseSubClass);
  const elBody = document.body;

  function toggleMenu() {
    elBody.classList.toggle(params.naOpenClass);
  }

  function init() {
    elSpNavOpen?.addEventListener('click', toggleMenu);
    elSpNavClose?.addEventListener('click', toggleMenu);
    elSpNavSubClose?.addEventListener('click', toggleMenu);
  }

  init();
}
