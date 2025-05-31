function showMessage() {
  alert("Chúc em tuổi mới luôn cười thật tươi, yêu đời, và hạnh phúc bên Bòn Bon Không Hạt 💖🎂");
}

// Fireworks effect using canvas
const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Firework {
  constructor() {
    this.x = random(100, canvas.width - 100);
    this.y = canvas.height;
    this.targetY = random(100, canvas.height / 2);
    this.color = `hsl(${Math.floor(random(0, 360))}, 100%, 70%)`;
    this.radius = 2;
    this.velocityY = -random(5, 7);
    this.exploded = false;
    this.particles = [];
  }

  update() {
    if (!this.exploded) {
      this.y += this.velocityY;
      if (this.y <= this.targetY) {
        this.exploded = true;
        this.explode();
      }
    }
    this.draw();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  explode() {
    for (let i = 0; i < 30; i++) {
      const angle = (Math.PI * 2 * i) / 30;
      const speed = random(2, 5);
      this.particles.push({
        x: this.x,
        y: this.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: this.color
      });
    }
  }

  updateParticles() {
    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.alpha -= 0.01;
    });
    this.particles = this.particles.filter((p) => p.alpha > 0);
  }

  drawParticles() {
    this.particles.forEach((p) => {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
  }
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    fireworks.push(new Firework());
  }

  fireworks.forEach((fw, i) => {
    if (!fw.exploded) fw.update();
    else {
      fw.updateParticles();
      fw.drawParticles();
    }
    if (fw.exploded && fw.particles.length === 0) fireworks.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();

