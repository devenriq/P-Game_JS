const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvasSize;
let elementsSize;

const setCanvasSize = () => {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10;

  startGame();
};

const startGame = () => {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + "px Verdana";
  game.textAlign = "start";

  const map = maps[0];
  const mapRows = map.trim().split("\n");
  const mapRowCols = mapRows.map((row) => row.trim().split(""));
  console.log(mapRowCols);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      game.fillText(
        emojis[mapRowCols[row][col]],
        elementsSize * col,
        elementsSize * row + 50
      );
    }
  }
};

window.addEventListener("DOMContentLoaded", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
