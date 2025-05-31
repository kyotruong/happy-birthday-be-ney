function showMessage() {
  alert(`Chào bé Ney 3 tủi. Chúc em sinh nhật vui vẻ. Chúc mừng em đã đi được 1 nửa cuộc đời, và hoàn thành được 1 nửa các nguyện vọng mà em mong muốn. Mặc dù chưa được trọn vẹn như ý em, nhưng cũng là thành tựu đáng ghi nhận mà em nhỉ? Chúng ta đã cùng nhau làm mọi thứ, cùng nhau trải qua gần như là mọi khó khăn, mới có được ngày hôm nay.

Cố gắng giữ nhau nhé hahah, đừng để đối phương đi hại đời người khác nữa. Chúng ta là mảnh ghép đẹp nhất rồi.

Cảm ơn em đã luôn cho anh cơ hội ở lại với em. Cảm ơn tình yêu của anh.

Một lần nữa. Chúc mừng sinh nhật Vợ Yêu của Ba Kyo!!!!!!!!`);
}

// Happy Birthday music autoplay after click
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
audio.loop = true;
audio.volume = 0.6;
window.addEventListener('click', () => {
  audio.play().catch(e => console.log("Autoplay blocked"));
}, { once: true });

// Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ["#ff0", "#f0f", "#0ff", "#f90", "#0f0"];
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
  for (let f of fireworks) {
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

setInterval(createFirework, 800);

// Background animations: heart balloons + snow
const bgCanvas = document.getElementById("background");
const bgCtx = bgCanvas.getContext("2d");
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

let hearts = Array.from({length: 30}, () => ({
  x: Math.random() * bgCanvas.width,
  y: Math.random() * bgCanvas.height,
  r: 8 + Math.random() * 8,
  speed: 0.5 + Math.random(),
  color: 'rgba(255,105,180,0.6)'
}));

let snow = Array.from({length: 60}, () => ({
  x: Math.random() * bgCanvas.width,
  y: Math.random() * bgCanvas.height,
  r: 1 + Math.random() * 3,
  speed: 0.5 + Math.random(),
  drift: (Math.random() - 0.5) * 0.5
}));

function updateBackground() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  for (let h of hearts) {
    h.y -= h.speed;
    if (h.y < -10) {
      h.y = bgCanvas.height + Math.random() * 50;
      h.x = Math.random() * bgCanvas.width;
    }
    bgCtx.beginPath();
    bgCtx.arc(h.x, h.y, h.r, 0, Math.PI * 2);
    bgCtx.fillStyle = h.color;
    bgCtx.fill();
  }

  for (let s of snow) {
    s.y += s.speed;
    s.x += s.drift;
    if (s.y > bgCanvas.height) {
      s.y = -10;
      s.x = Math.random() * bgCanvas.width;
    }
    bgCtx.beginPath();
    bgCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    bgCtx.fillStyle = "#fff";
    bgCtx.fill();
  }
}

function animate() {
  updateFireworks();
  updateBackground();
  requestAnimationFrame(animate);
}

animate();


