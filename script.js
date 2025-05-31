// Show/hide message box
function showMessage() {
  document.getElementById("messageBox").style.display = "block";
}

function closeMessage() {
  document.getElementById("messageBox").style.display = "none";
}

// Auto-play audio
window.addEventListener("DOMContentLoaded", () => {
  const song = document.getElementById("birthdaySong");
  song.play().catch(() => {
    // play may fail without user interaction in some browsers
  });
});

// Simple fireworks animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
function createParticle(x, y, color) {
  return {
    x,
    y,
    radius: Math.random() * 3 + 1,
    color,
    dx: (Math.random() - 0.5) * 5,
    dy: (Math.random() - 0.5) * 5,
    life: 100
  };
}

function explode(x, y) {
  const colors = ["#ff69b4", "#ffccff", "#ffff66", "#ff9966"];
  for (let i = 0; i < 30; i++) {
    particles.push(createParticle(x, y, colors[Math.floor(Math.random() * colors.length)]));
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.dx;
    p.y += p.dy;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  }
  requestAnimationFrame(animateFireworks);
}
animateFireworks();

setInterval(() => {
  explode(Math.random() * canvas.width, Math.random() * canvas.height / 2);
}, 1000);

// Optional: heart or snow effect
function spawnHearts() {
  const heart = document.createElement("div");
  heart.innerText = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.color = "#ff69b4";
  heart.style.animation = "floatUp 5s linear forwards";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(spawnHearts, 500);

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);



