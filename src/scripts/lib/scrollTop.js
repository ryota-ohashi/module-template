export default function scrollTop() {
  const options = {
    naScrollTopClass: 'js-scroll-top',
  };

  const elScrollTop = document.querySelector('.' + options.naScrollTopClass);

  if (!elScrollTop) return;

  elScrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
