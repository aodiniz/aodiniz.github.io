
const header_nav = document.querySelector('#header-nav');

const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

var throttleScrollFlag = false;

let previousScrollPosition = 0;

function scrollingDownward() {
  let currentScrolledPosition = window.scrollY; /*|| window.pageYOffset;*/
  let scrollingDown = (currentScrolledPosition > previousScrollPosition);
  previousScrollPosition = currentScrolledPosition;
  return scrollingDown;
};

function handleScroll() {
  if (scrollingDownward()) {
    header_nav.classList.add('blue');
    header_nav.classList.remove('green')
    console.log("Down")
  } else {
    header_nav.classList.add('green');
    header_nav.classList.remove('blue')
    console.log("Up")
  }
}

function throttleScroll(throttlePeriod) {
  if (throttleScrollFlag) return;

  throttleScrollFlag = true;

  setTimeout(() => {
    handleScroll();
    throttleScrollFlag = false;
  }, throttlePeriod);
}

window.addEventListener("scroll", () => {
    if (mediaQueryReducedMotion && !mediaQueryReducedMotion.matches) {
        throttleScroll(200);
    }
});
