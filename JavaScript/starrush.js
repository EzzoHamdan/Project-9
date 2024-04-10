document.getElementById('rush').onclick = function () {
    const sectionFinale = document.querySelector('.sectionfinale');
    var iValue;
    if(!isPhone()){
        iValue = 50;
    }
    else{
        iValue = 25;
    }
    for (let i = 0; i < iValue; i++) {
        animateStar(sectionFinale); // Pass sectionFinale as an argument
    }
};

function animateStar(section) {
    let star = document.createElement('div');
    star.className = 'starrush';
    section.appendChild(star); // Append the star to the specified section

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let duration = Math.random() * 1 + 1;

    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.transition = `all ${duration}s linear`;
    star.style.transform = 'translate(-50%, -50%) scale(0)';

    setTimeout(() => star.remove(), duration * 1000);

    requestAnimationFrame(() => {
        star.style.left = '49%';
        star.style.top = '45%';
        star.style.opacity = 0;
        star.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}
