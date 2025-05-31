function showMessage() {
  alert(`Chào bé Ney 3 tủi. Chúc em sinh nhật vui vẻ. Chúc mừng đã đi được 1 nửa cuộc đời, và hoàn thành được 1 nửa các nguyện vọng mà em mong muốn.

Mặc dù chưa được trọn vẹn như ý em, nhưng cũng là thành tựu đáng ghi nhận mà em nhỉ? Chúng ta đã cùng nhau làm mọi thứ, cùng nhau trải qua gần như là mọi khó khăn, mới có được ngày hôm nay.

Cố gắng giữ nhau nhé hahah, đừng để đối phương đi hại đời người khác nữa. Chúng ta là mảnh ghép đẹp nhất rồi.

Cảm ơn em đã luôn cho anh cơ hội ở lại với em. Cảm ơn tình yêu của anh.

Một lần nữa. Chúc mừng sinh nhật Vợ Yêu của Ba Kyo!!!!!!!!`);
}

document.getElementById("showMessageBtn").addEventListener("click", showMessage);

// Fireworks animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ["#ff0", "#f0f", "#0ff", "#f90", "#0f0", "#f00"];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x,
      y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 4 + 2,
      radius: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100
    });
  }
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    const vx = Math.cos(p.angle) * p.speed;
    const vy = Math.sin(p.angle) * p.speed;
    p.x += vx;
    p.y += vy;
    p.radius += 0.3;
    p.life -= 1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }

  particles = particles.filter(p => p.life > 0);
}

setInterval(createParticle, 800);
function animate() {
  updateParticles();
  requestAnimationFrame(animate);
}
animate();




