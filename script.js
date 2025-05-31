// script.js
function showMessage() {
  const message = `Chào bé Ney 3 tủi. Chúc em sinh nhật vui vẻ. Chúc mừng đã đi được 1 nửa cuộc đời, và hoàn thành được 1 nửa các nguyện vọng mà em mong muốn. Mặc dù chưa được trọn vẹn như ý em, nhưng cũng là thành tựu đáng ghi nhận mà em nhỉ? Chúng ta đã cùng nhau làm mọi thứ, cùng nhau trải qua gần như là mọi khó khăn, mới có được ngày hôm nay.

Cố gắng giữ nhau nhé hahah, đừng để đối phương đi hại đời người khác nữa. Chúng ta là mảnh ghép đẹp nhất rồi.

Cảm ơn em đã luôn cho anh cơ hội ở lại với em. Cảm ơn tình yêu của anh.

Một lần nữa. Chúc mừng sinh nhật Vợ Yêu của Ba Kyo!!!!!!!!`;

  const msgBox = document.createElement('div');
  msgBox.style.position = 'fixed';
  msgBox.style.top = '50%';
  msgBox.style.left = '50%';
  msgBox.style.transform = 'translate(-50%, -50%)';
  msgBox.style.background = 'white';
  msgBox.style.padding = '30px';
  msgBox.style.border = '2px solid #ff69b4';
  msgBox.style.borderRadius = '20px';
  msgBox.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';
  msgBox.style.zIndex = 9999;
  msgBox.style.maxWidth = '90%';
  msgBox.style.maxHeight = '80%';
  msgBox.style.overflowY = 'auto';
  msgBox.style.fontSize = '1.2rem';
  msgBox.style.lineHeight = '1.6';
  msgBox.style.whiteSpace = 'pre-line';
  msgBox.style.textAlign = 'left';
  msgBox.innerText = message;

  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'Đóng';
  closeBtn.style.marginTop = '20px';
  closeBtn.style.padding = '10px 20px';
  closeBtn.style.background = '#ff69b4';
  closeBtn.style.color = 'white';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '10px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontSize = '1rem';

  closeBtn.onclick = () => document.body.removeChild(msgBox);
  msgBox.appendChild(document.createElement('br'));
  msgBox.appendChild(closeBtn);

  document.body.appendChild(msgBox);
}

// Fireworks animation (enhanced)
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ["#ff0", "#f0f", "#0ff", "#f90", "#0f0", "#ff4444", "#44ff44", "#4444ff"];
  for (let i = 0; i < 60; i++) {
    fireworks.push({
      x,
      y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 6 + 2,
      radius: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1
    });
  }
}

function updateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < fireworks.length; i++) {
    const f = fireworks[i];
    const vx = Math.cos(f.angle) * f.speed;
    const vy = Math.sin(f.angle) * f.speed;
    f.x += vx;
    f.y += vy;
    f.radius += 0.5;
    f.alpha -= 0.02;
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${hexToRgb(f.color)}, ${f.alpha})`;
    ctx.fill();
  }
  fireworks = fireworks.filter(f => f.alpha > 0);
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

setInterval(createFirework, 700);
function animate() {
  updateFireworks();
  updateBalloons();
  updateGlitter();
  updateFlames();
  requestAnimationFrame(animate);
}
animate();

// Music autoplay (Happy Birthday song)
const audio = new Audio("https://cdn.pixabay.com/audio/2023/03/13/audio_11d135e661.mp3");
audio.loop = true;
audio.volume = 0.6;
window.addEventListener('click', () => {
  audio.play().catch(e => console.log("Autoplay blocked"));
}, { once: true });

// Balloons animation
const balloonCount = 20;
let balloons = [];

for (let i = 0; i < balloonCount; i++) {
  balloons.push({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * canvas.height,
    r: 10 + Math.random() * 10,
    speed: 1 + Math.random() * 2,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  });
}

function updateBalloons() {
  for (let b of balloons) {
    b.y -= b.speed;
    if (b.y < -50) {
      b.y = canvas.height + Math.random() * canvas.height;
      b.x = Math.random() * canvas.width;
    }
    ctx.beginPath();
    ctx.ellipse(b.x, b.y, b.r * 0.8, b.r, 0, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
  }
}

// Glitter (confetti) effect
let glitters = Array.from({length: 80}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 4 + 1,
  speed: Math.random() * 1 + 0.5,
  color: `hsl(${Math.random() * 360}, 80%, 70%)`
}));

function updateGlitter() {
  for (let g of glitters) {
    g.y += g.speed;
    if (g.y > canvas.height) {
      g.y = 0;
      g.x = Math.random() * canvas.width;
    }
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.size, 0, 2 * Math.PI);
    ctx.fillStyle = g.color;
    ctx.fill();
  }
}

// Candle flames animation
let flames = [
  { x: window.innerWidth / 2 - 50, y: window.innerHeight - 200 },
  { x: window.innerWidth / 2, y: window.innerHeight - 200 },
  { x: window.innerWidth / 2 + 50, y: window.innerHeight - 200 }
];

function updateFlames() {
  for (let f of flames) {
    const flicker = Math.random() * 5;
    ctx.beginPath();
    ctx.moveTo(f.x, f.y);
    ctx.quadraticCurveTo(f.x - 5, f.y - 20 - flicker, f.x, f.y - 40);
    ctx.quadraticCurveTo(f.x + 5, f.y - 20 - flicker, f.x, f.y);
    ctx.fillStyle = 'rgba(255, 165, 0, 0.7)';
    ctx.fill();
  }
}


