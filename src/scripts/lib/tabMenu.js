export default function TabMenu(elTarget, opt) {
  if (!elTarget) return;

  const params = {
    naActiveClass: 'is-tab-active',
    naShowClass: 'is-tab-show',
  };

  const elTablist = Array.from(elTarget.querySelectorAll('.js-tab-list'));
  const elTabContent = Array.from(elTarget.querySelectorAll('.js-tab-content'));

  function tabSwitch(self) {
    elTarget.querySelector('.' + params.naActiveClass).classList.remove(params.naActiveClass);
    self.classList.add(params.naActiveClass);

    elTarget.querySelector('.' + params.naShowClass).classList.remove(params.naShowClass);
    const index = elTablist.indexOf(self);
    elTabContent[index].classList.add(params.naShowClass);
  }

  for (let i = 0; i < elTablist.length; i++) {
    elTablist[i].addEventListener('click', (event) => {
      tabSwitch(event.target);
    });
  }
}
