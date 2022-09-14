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
  // console.log(mapRowCols);

  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * colI;
      const posY = elementsSize * (rowI + 1);
      game.fillText(emoji, posX, posY);
      console.log({ row, rowI, col, colI });
    });
  });

  // for (let row = 0; row < 10; row++) {
  //   for (let col = 0; col < 10; col++) {
  //     game.fillText(
  //       emojis[mapRowCols[row][col]],
  //       elementsSize * col,
  //       elementsSize * row + 50
  //     );
  //   }
  // }
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
        break;
      case "ArrowDown":
        console.log("You pressed Arrow Down");
        break;
      case "ArrowLeft":
        console.log("You pressed Arrow Left");
        break;
      case "ArrowRight":
        console.log("You pressed Arrow Right");
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
