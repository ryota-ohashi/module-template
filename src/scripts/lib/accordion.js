import anime from "animejs";

export default function accordion(elTarget, opt) {
  if (!elTarget) return;

  const DEFAULT_OPTIONS = {
    triggerClass: 'js-accordion-trigger',
    contentClass: 'js-accordion-content',
    activeClass: 'is-active',
    duration: 300,
    easing: 'easeInOutQuad'
  };

  const state = {
    isAnimating: false,
    options: { ...DEFAULT_OPTIONS, ...opt },
    contentElements: []
  };

  function initializeAccordion() {
    state.contentElements = Array.from(document.querySelectorAll('.' + state.options.contentClass));
    bindEvents();
  }

  function animate(el, params) {
    return anime({
      targets: el,
      duration: state.options.duration,
      easing: state.options.easing,
      height: params.height,
      begin: () => {
        state.isAnimating = true;
        if (params.onBegin) params.onBegin();
      },
      complete: () => {
        state.isAnimating = false;
        if (params.onComplete) params.onComplete();
      }
    });
  }

  function slideUp(el) {
    const height = el.clientHeight;

    animate(el, {
      height: [height + 'px', '0px'],
      onComplete: () => el.style.display = 'none'
    });
  }

  function slideDown(el) {
    el.style.display = 'block';
    el.style.height = 'auto';
    const height = el.clientHeight;

    animate(el, {
      height: ['0px', height + 'px'],
      onBegin: () => {
        el.style.height = '0';
        el.style.display = 'block';
      },
      onComplete: () => el.style.height = 'auto'
    });
  }

  function toggleSlide(content, trigger) {
    if (state.isAnimating) return;

    const isActive = trigger.classList.contains(state.options.activeClass);

    if (isActive) {
      trigger.classList.remove(state.options.activeClass);
      slideUp(content);
    } else {
      trigger.classList.add(state.options.activeClass);
      slideDown(content);
    }
  }

  function bindEvents() {
    const triggers = elTarget.querySelectorAll('.' + state.options.triggerClass);

    triggers.forEach(trigger => {
      const content = trigger.closest('li').querySelector('.' + state.options.contentClass);

      trigger.addEventListener('click', () => toggleSlide(content, trigger));
    });
  }

  initializeAccordion();
}
