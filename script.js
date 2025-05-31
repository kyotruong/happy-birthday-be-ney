function showMessage() {
  alert(`Chào bé Ney 3 tủi. Chúc em sinh nhật vui vẻ. Chúc mừng đã đi được 1 nửa cuộc đời, và hoàn thành được 1 nửa các nguyện vọng mà em mong muốn. Mặc dù chưa được trọn vẹn như ý em, nhưng cũng là thành tựu đáng ghi nhận mà em nhỉ? Chúng ta đã cùng nhau làm mọi thứ, cùng nhau trải qua gần như là mọi khó khăn, mới có được ngày hôm nay.

Cố gắng giữ nhau nhé hahah, đừng để đối phương đi hại đời người khác nữa. Chúng ta là mảnh ghép đẹp nhất rồi.

Cảm ơn em đã luôn cho anh cơ hội ở lại với em. Cảm ơn tình yêu của anh.

Một lần nữa. Chúc mừng sinh nhật Vợ Yêu của Ba Kyo!!!!!!!!`);
}

// Canvas setup
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let glitter = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ["#ff0", "#f0f", "#0ff", "#f90", "#0f0", "#f33", "#09f"];
  for (let i = 0; i < 30; i++) {
    fireworks.push({
      x,
      y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 5 + 2,
      radius: 0,
      color: colors[Math.floor(Math.random() * colors.length)]
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
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
    ctx.fillStyle = f.color;
    ctx.fill();
  }
  fireworks = fireworks.filter(f => f.radius < 10);
}

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

function createGlitter() {
  for (let i = 0; i < 10; i++) {
    glitter.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      alpha: 1,
      fade: Math.random() * 0.05 + 0.01
    });
  }
}

function updateGlitter() {
  for (let g of glitter) {
    g.alpha -= g.fade;
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${g.alpha})`;
    ctx.fill();
  }
  glitter = glitter.filter(g => g.alpha > 0);
}

// Start animation
setInterval(createFirework, 800);
setInterval(createGlitter, 300);
function animate() {
  updateFireworks();
  updateBalloons();
  updateGlitter();
  requestAnimationFrame(animate);
}
animate();

// Music autoplay
const audio = new Audio("https://www2.cs.uic.edu/~i101/SoundFiles/HappyBirthday.wav");
audio.loop = true;
window.addEventListener('click', () => {
  audio.play().catch(e => console.log("Autoplay blocked"));
}, { once: true });

