function showMessage() {
  document.getElementById("overlay").style.display = "flex";
}

function hideMessage() {
  document.getElementById("overlay").style.display = "none";
}

// Fireworks effect
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  const x = random(100, canvas.width - 100);
  const y = random(50, canvas.height / 2);
  const count = 50;
  const color = `hsl(${Math.floor(random(0, 360))}, 100%, 50%)`;
  for (let i = 0; i < count; i++) {
    fireworks.push({
      x,
      y,
      angle: (Math.PI * 2 * i) / count,
      speed: random(2, 5),
      radius: 0,
      color,
      alpha: 1,
    });
  }
}

function updateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((f, index) => {
    const vx = Math.cos(f.angle) * f.speed;
    const vy = Math.sin(f.angle) * f.speed;
    f.x += vx;
    f.y += vy;
    f.alpha -= 0.02;
    ctx.beginPath();
    ctx.arc(f.x, f.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${hexToRgb(f.color)}, ${f.alpha})`;
    ctx.fill();
    if (f.alpha <= 0) fireworks.splice(index, 1);
  });
}

function hexToRgb(hsl) {
  const div = document.createElement("div");
  div.style.color = hsl;
  document.body.appendChild(div);
  const rgb = window.getComputedStyle(div).color;
  document.body.removeChild(div);
  return rgb.match(/\d+/g).slice(0, 3).join(",");
}

setInterval(() => {
  createFirework();
}, 1200);

function animate() {
  updateFireworks();
  requestAnimationFrame(animate);
}

animate();


