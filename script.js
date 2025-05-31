function showWish() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Fireworks animation
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
function createParticle(x, y) {
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: x,
      y: y,
      radius: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 6 + 2,
      alpha: 1
    });
  }
}

function animate() {
  ctx.fillStyle = 'rgba(255, 240, 245, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.01;
    if (p.alpha <= 0) particles.splice(i, 1);
    else {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
  });
  requestAnimationFrame(animate);
}

canvas.addEventListener('click', (e) => {
  createParticle(e.clientX, e.clientY);
});

setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  createParticle(x, y);
}, 1200);

animate();
