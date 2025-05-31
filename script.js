body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
  background: radial-gradient(circle at center, #ffe6f0, #ffb3d9);
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}

.content {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  z-index: 1;
}

.title {
  font-size: 3rem;
  animation: glitter 2s infinite alternate;
  text-shadow: 0 0 10px #fff, 0 0 20px #ff69b4;
}

.signature {
  font-size: 1.5rem;
  margin-top: 2rem;
  color: #fff8f8;
  text-shadow: 0 0 4px #ffcccc;
}

button {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 15px 25px;
  font-size: 1.2rem;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 0 10px #ffb6c1;
  transition: transform 0.3s;
}

button:hover {
  transform: scale(1.1);
}

@keyframes glitter {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #ff69b4;
  }
  to {
    text-shadow: 0 0 20px #ffccff, 0 0 30px #ff99cc;
  }
}

