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

let score = document.getElementById("score");

function counter() {
    let i = 0;
    setInterval(function() {
        if (i == 100) clearInterval(this);
        else console.log((i++));
    }, 1000);
}
counter()

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    let squeak = document.getElementById("audio_squeak");
        for (let cat of game.cats) {
            let colliding = game.detectCollision(game.mouse, cat);
        if (colliding === true) {
            if (squeaked === false) {
                squeak.play()
                squeaked = true;
            }
        } 
    }
        
    ctx.clearRect(0, 0, 600, 600);
    
    if (squeaked === true) {
        ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();    
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Eeek!", GAME_WIDTH / 2, GAME_HEIGHT / 2 - 30);
        ctx.fillText("GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT / 2 + 30);

    }   else {
        game.update(deltaTime);
        game.draw(ctx);
    } 
    
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", e => {
    if (e.keyCode == 32) {
        game.start();
        requestAnimationFrame(gameLoop);
    }
})