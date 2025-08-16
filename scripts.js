const stars = document.getElementById('stars');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    stars.appendChild(star);
}

const starRain = document.getElementById('star-rain');
setInterval(() => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    starRain.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}, 5000);
