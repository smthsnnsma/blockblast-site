const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let ball = { x: 200, y: 250, radius: 10, dx: 3, dy: 3 };
let blocks = [];
let rows = 5, cols = 5, blockWidth = 70, blockHeight = 20;

// Generate blocks
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        blocks.push({ x: c * (blockWidth + 5) + 25, y: r * (blockHeight + 5) + 40, hit: false });
    }
}

// Draw game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // Draw blocks
    blocks.forEach(block => {
        if (!block.hit) {
            ctx.fillStyle = "red";
            ctx.fillRect(block.x, block.y, blockWidth, blockHeight);
        }
    });

    // Ball movement
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Collision with walls
    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) ball.dx *= -1;
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) ball.dy *= -1;

    // Collision with blocks
    blocks.forEach(block => {
        if (!block.hit && ball.x > block.x && ball.x < block.x + blockWidth &&
            ball.y > block.y && ball.y < block.y + blockHeight) {
            ball.dy *= -1;
            block.hit = true;
        }
    });

    requestAnimationFrame(draw);
}

draw();
