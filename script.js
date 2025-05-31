// Phát nhạc tự động
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("birthday-audio");
  if (audio) {
    audio.play().catch(() => {
      // Nếu trình duyệt chặn, bật qua tương tác
      const btn = document.getElementById("wish-button");
      if (btn) {
        btn.addEventListener("click", () => {
          audio.play();
        });
      }
    });
  }
});

// Pháo hoa bằng canvas
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  const x = random(100, canvas.width - 100);
  const y = random(100, canvas.height / 2);
  const radius = random(30, 60);
  const colors = ['#ff69b4', '#ffcc00', '#ff6666', '#66ccff', '#ffffff'];

  for (let i = 0; i < 50; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = random(2, 5);
    fireworks.push({
      x,
      y,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      alpha: 1,
      radius: random(1, 3),
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
}

function animateFireworks() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.01;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.alpha})`;
    ctx.fill();

    if (p.alpha <= 0) fireworks.splice(i, 1);
  });

  requestAnimationFrame(animateFireworks);
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  return `${(bigint >> 16) & 255},${(bigint >> 8) & 255},${bigint & 255}`;
}

setInterval(createFirework, 1500);
animateFireworks();


