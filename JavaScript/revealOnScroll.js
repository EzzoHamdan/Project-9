window.addEventListener('scroll', function () {
    var positionFromTop = window.scrollY;
  
    if (positionFromTop > document.getElementById('featuredw').offsetTop * 0.75) {
      document.getElementById('featuredw').classList.add('visibleforcenter');
      document.getElementById('featuredc').classList.add('visibleforcenter');
    }
  
    if (positionFromTop > document.getElementById('eduTitle').offsetTop * 0.85) {
      document.getElementById('eduTitle').classList.add('visibleforcenter');
      document.getElementById('leftCard').classList.add('visible');
      document.getElementById('rightCard').classList.add('visible');
    }
  
    if (positionFromTop > document.getElementById('leftAbout').offsetTop * 0.9) {
      document.getElementById('leftAbout').classList.add('visible');
      document.getElementById('rightAbout').classList.add('visible');
    }
  });

  
