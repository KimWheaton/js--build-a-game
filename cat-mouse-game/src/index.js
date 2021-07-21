import Mouse from "./mouse.js";
import Cat from "./cat.js";
import InputHandler from "./input.js";
// import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
let imgCat = document.getElementById("img_cat");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;

let mouse = new Mouse(GAME_WIDTH, GAME_HEIGHT);
let cat = new Cat(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(mouse);

// let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {

    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 600, 600);
    mouse.update(deltaTime);
    cat.update(deltaTime);
    mouse.draw(ctx);
    cat.draw(ctx);
//     // game.update(deltaTime);
//     // game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
