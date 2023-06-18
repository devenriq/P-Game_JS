const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvasSize;
let elementsSize;

const playerPosition = {
  x: undefined,
  y: undefined,
};

const setCanvasSize = () => {
  window.innerHeight > window.innerWidth
    ? (canvasSize = window.innerWidth * 0.8)
    : (canvasSize = window.innerHeight * 0.8);

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10.3;

  startGame();
};

const startGame = () => {
  // console.log({ canvasSize, elementsSize });

  game.font = elementsSize + "px Verdana";
  game.textAlign = "start";

  const map = maps[0];
  const mapRows = map.trim().split("\n");
  const mapRowCols = mapRows.map((row) => row.trim().split(""));
  // console.log(mapRowCols);

  game.clearRect(0, 0, canvasSize, canvasSize);

  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * colI;
      const posY = elementsSize * (rowI + 1);

      if (col == "O") {
        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log(playerPosition);
        }
      }

      game.fillText(emoji, posX, posY);
    });
  });

  movePlayer();
};

const movePlayer = () => {
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
};

const upButton = document.querySelector("#up");
const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const downButton = document.querySelector("#down");

const pressedKey = (key) => (e) => {
  console.log(`You've pressed the ${key} key`);
};

window.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;
    const code = event.code;

    switch (name) {
      case "ArrowUp":
        console.log(`you pressed Arrow Up`);
        if (playerPosition.y - elementsSize < elementsSize) {
          console.log("Out");
        } else {
          playerPosition.y -= elementsSize;
          startGame();
        }

        break;
      case "ArrowDown":
        console.log("You pressed Arrow Down");
        if (playerPosition.y + elementsSize > canvasSize) {
          console.log("Out");
        } else {
          playerPosition.y += elementsSize;
          startGame();
        }

        break;
      case "ArrowLeft":
        if (playerPosition.x - elementsSize < 0) {
          console.log("Out");
        } else {
          playerPosition.x -= elementsSize;
          startGame();
        }

        break;
      case "ArrowRight":
        if (playerPosition.x + elementsSize > canvasSize - elementsSize) {
          console.log("Out");
        } else {
          playerPosition.x += elementsSize;
          startGame();
        }
        break;
      default:
        break;
    }
    // Alert the key name and key code on keydown
  },
  false
);

upButton.addEventListener("click", pressedKey(upButton.id));
leftButton.addEventListener("click", pressedKey(leftButton.id));
rightButton.addEventListener("click", pressedKey(rightButton.id));
downButton.addEventListener("click", pressedKey(downButton.id));

window.addEventListener("DOMContentLoaded", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
