export default function modal() {
  const options = {
    naModalOpenClass: 'is-modal-open',
    naClickOpenClass: 'js-modal-open',
    naClickCloseClass: 'js-modal-close',
    // naClickCloseSubClass: 'js-modal-sub-close',
    naBody: 'js-body',
  };

  const elModalOpen = document.querySelector('.' + options.naClickOpenClass);
  const elModalClose = document.querySelectorAll('.' + options.naClickCloseClass);
  // const elModalSubClose = document.querySelector('.' + options.naClickCloseSubClass);
  const elBody = document.body;

  function toggleClass() {
    elBody.classList.toggle(options.naModalOpenClass);
  }

  elModalOpen.addEventListener('click', (e) => {
    e.preventDefault();
    toggleClass();
  });

  elModalClose.forEach((el) => {
    el.addEventListener('click', toggleClass);
  });
  // elModalSubClose.addEventListener('click', toggleClass);
}
