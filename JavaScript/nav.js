window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY;
  const featuredElement = document.getElementById("featuredw");
  const lastLine = document.getElementById("lastLine");
  //const root = document.documentElement;

  if (scrollPos < featuredElement.offsetTop * 0.75) {
    makeNavHidden();
  } else if (scrollPos > lastLine.offsetTop * 0.95) {
    //setHoverAlpha(0.75);
    makeNavHidden();
  } else {
    //setHoverAlpha(0.75);
    makeNavVisible();
  }

  //function setHoverAlpha(value) {
  //  root.style.setProperty('--hover-alpha', value);
  //}
});

function makeNavVisible() {
  navbar.style.visibility = 'visible';
  navbar.style.opacity = 1;
  document.documentElement.style.setProperty('--hover-alpha', '0.75');
  document.documentElement.style.setProperty('--blur-value', '5px');
  //navbar.classList.remove('hidden'); // Remove the 'hidden' class
  navbar.querySelectorAll('a').forEach(function (link) {
    link.style.color = 'rgba(255, 255, 255, 1)';
  });
}

function makeNavHidden() {
  //navbar.classList.add('hidden'); // Add the 'hidden' class
  navbar.style.visibility = 'hidden';
  navbar.style.opacity = 0;
  document.documentElement.style.setProperty('--hover-alpha', '0');
  document.documentElement.style.setProperty('--blur-value', '0');
  navbar.querySelectorAll('a').forEach(function (link) {
    link.style.color = 'rgba(255, 255, 255, 0)';
  });
}






document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars');
  const numStars = 16;
  const starSizeMin = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--star-size-min'));
  const starSizeMax = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--star-size-max'));
  const starMargin = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--star-margin'));
  let isAnimating = true;

  function toggleAnimation() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.style.animationPlayState = isAnimating ? 'paused' : 'running');
    isAnimating = !isAnimating;
  }

  function isOverlap(x, y) {
    const existingStars = document.querySelectorAll('.star');
    for (let i = 0; i < existingStars.length; i++) {
      const star = existingStars[i];
      const starX = parseInt(star.style.left);
      const starY = parseInt(star.style.top);
      if (Math.abs(x - starX) < starSizeMax + starMargin && Math.abs(y - starY) < starSizeMax + starMargin) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < numStars; i++) {
    let randomX, randomY;
    do {
      randomX = Math.floor(Math.random() * parseInt(getComputedStyle(document.documentElement).getPropertyValue('--toggle-width')));
      randomY = Math.floor(Math.random() * parseInt(getComputedStyle(document.documentElement).getPropertyValue('--toggle-height')));
    } while (isOverlap(randomX, randomY));

    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = randomX + 'px';
    star.style.top = randomY + 'px';
    const starSize = starSizeMin + Math.random() * (starSizeMax - starSizeMin);
    star.style.width = star.style.height = starSize + 'px';
    starsContainer.appendChild(star);
  }

  const toggleCheckbox = document.getElementById('toggle-checkbox');
  toggleCheckbox.addEventListener('change', toggleAnimation);
});