const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let drone = { x: 280, y: 350, width: 40, height: 40 };
let obstacles = [];
let score = 0;

function drawDrone() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(drone.x, drone.y, drone.width, drone.height);
}

function drawObstacles() {
  ctx.fillStyle = 'red';
  obstacles.forEach(obs => ctx.fillRect(obs.x, obs.y, obs.width, obs.height));
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDrone();
  drawObstacles();
  requestAnimationFrame(update);
}

update();
