const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

const startGame = () => {
  let canvasSize;

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  const elementsSize = canvasSize / 10;

  console.log({ canvasSize, elementsSize });

  // window.innerHeight;
  // window.innerWidth;

  // game.fillRect(0, 0, 100, 100);
  // game.clearRect(29, 20, 10, 10);
  // game.font = "24px Verdana";
  // game.fillStyle = "purple";
  // game.textAlign = "end";
  // game.fillText("Platzi", 25, 25);
};

window.addEventListener("DOMContentLoaded", startGame);
