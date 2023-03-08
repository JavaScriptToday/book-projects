const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const messageElem = document.getElementById("message");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let gameWon = false;
let moves = 0;
let boardState = ["", "", "", "", "", "", "", "", ""];

function handleCellClick(e) {
  if (gameWon) {
    return;
  }

  const cellIndex = Array.from(cells).indexOf(e.target);
  if (boardState[cellIndex] !== "") {
    return;
  }

  boardState[cellIndex] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer);

  checkGameWon();
  togglePlayer();
  moves++;

  if (!gameWon && moves === 9) {
    messageElem.textContent = "Game over! It's a tie.";
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkGameWon() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      boardState[a] !== "" &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      messageElem.textContent = `${currentPlayer} wins!`;
      gameWon = true;
      break;
    }
  }
}

function restartGame() {
  currentPlayer = "X";
  gameWon = false;
  moves = 0;
  boardState = ["", "", "", "", "", "", "", "", ""];

  messageElem.textContent = "";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);
