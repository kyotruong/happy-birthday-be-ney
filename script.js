function showMessage() {
  const box = document.getElementById("messageBox");
  const msg = document.getElementById("messageText");
  msg.innerText = `Chào bé Ney 3 tủi. Chúc em sinh nhật vui vẻ. Chúc mừng đã đi được 1 nửa cuộc đời, và hoàn thành được 1 nửa các nguyện vọng mà em mong muốn. Mặc dù chưa được trọn vẹn như ý em, nhưng cũng là thành tựu đáng ghi nhận mà em nhỉ?

Chúng ta đã cùng nhau làm mọi thứ, cùng nhau trải qua gần như là mọi khó khăn, mới có được ngày hôm nay. Cố gắng giữ nhau nhé hahah, đừng để đối phương đi hại đời người khác nữa. Chúng ta là mảnh ghép đẹp nhất rồi.

Cảm ơn em đã luôn cho anh cơ hội ở lại với em. Cảm ơn tình yêu của anh. Một lần nữa. Chúc mừng sinh nhật Vợ Yêu của Ba Kyo!!!!!!!!`;
  box.classList.add("show");
}

function closeMessage() {
  document.getElementById("messageBox").classList.remove("show");
}

// PHÁO HOA (simple particle)
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
  const x = Math.random() * canvas.width;
  const y = canvas.height;
  const size = Math.random() * 3 + 1;
  const speedY = Math.random() * -5 - 2;
  const speedX = (Math.random() - 0.5) * 2;
  const color = `hsl(${Math.random() * 360}, 100%, 70%)`;

  particles.push({ x, y, size, speedY, speedX, color });
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.size *= 0.97;
    p.speedY += 0.2;
    if (p.size < 0.5) particles.splice(i, 1);
    else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
  });
}

function animateFireworks() {
  createParticle();
  updateParticles();
  requestAnimationFrame(animateFireworks);
}
animateFireworks();
