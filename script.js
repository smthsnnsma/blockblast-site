const board = document.getElementById("game-board");

// Create the grid
for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
}

// Drag and drop functionality
const blocks = document.querySelectorAll(".block");
blocks.forEach(block => {
    block.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", "block");
    });
});

board.addEventListener("dragover", (e) => {
    e.preventDefault();
});

board.addEventListener("drop", (e) => {
    const draggedBlock = document.createElement("div");
    draggedBlock.classList.add("block");
    draggedBlock.style.position = "absolute";
    draggedBlock.style.left = e.clientX - 15 + "px";
    draggedBlock.style.top = e.clientY - 15 + "px";
    board.appendChild(draggedBlock);
});
