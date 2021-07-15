// import { Keyboarder } from "./keyboarder.js";
import Mouse from "./mouse.js";
import InputHandler from "./input.js";

// import { Game } from "../temporary files/game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;

let mouse = new Mouse(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(mouse);

// let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {

    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 600, 600);
    mouse.update(deltaTime);
    mouse.draw(ctx);

//     // game.update(deltaTime);
//     // game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();

// requestAnimationFrame(gameLoop);
