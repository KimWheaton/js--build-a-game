import Mouse from "./mouse.js";
import Cat from "./cat.js";
import InputHandler from "./input.js";
import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let squeaked = false;

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    // let squeak = document.getElementById("audio_squeak");
    // let colliding = game.detectCollision(game.mouse, game.cats);
    // if (colliding === true) {
    //     if (squeaked === false) {
    //         squeak.play()
    //         squeaked = true;
    //     }
    // } 
       
    ctx.clearRect(0, 0, 600, 600);
    
    // if (squeaked === true) {
    //     ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    //     ctx.fillStyle = "rgba(0,0,0,1)";
    //     ctx.fill();    
    //     ctx.font = "30px Arial";
    //     ctx.fillStyle = "white";
    //     ctx.textAlign = "center";
    //     ctx.fillText("GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT / 2);

    // }   else {
        game.update(deltaTime);
        game.draw(ctx);
    // }
    
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", e => {
    if (e.keyCode == 32) {
        game.start();
        requestAnimationFrame(gameLoop);
    }
})