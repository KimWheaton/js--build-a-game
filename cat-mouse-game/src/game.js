import Mouse from "./mouse.js";
import Cat from "./cat.js";
import InputHandler from "./input.js";

// const GAMESTATE = {
//     PAUSED: 0,
//     RUNNING: 1,
//     MENU: 2,
//     GAMEOVER: 3,
// }

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.cat = new Cat(this);
        this.mouse = new Mouse(this);
        this.gameObjects = [];
        // this.gamestate = GAMESTATE.MENU;
    }

    start() {
        this.gameObjects = [
            this.mouse,
            this.cat
        ];

        new InputHandler(this.mouse);

        // if (
        //     this.gamestate !== GAMESTATE.MENU &&
        //     this.gamestate !== GAMESTATE.NEWLEVEL
        // )
        //     return;
        
        // this.mouse.reset();
        // this.gamestate = GAMESTATE.RUNNING;    
    }

    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime))
        
        // if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        
        // if (
            //     this.gamestate === GAMESTATE.PAUSED ||
            //     this.gamestate === GAMESTATE.MENU ||
            //     this.gamestate === GAMESTATE.GAMEOVER
            // )
            //     return;
    };

    detectCollision(mouse, cat) {
        let rectM = mouse
        let rectC = cat

        if (rectM.position.x < rectC.position.x + rectC.width &&
            rectM.position.x + rectM.width > rectC.position.x &&
            rectM.position.y < rectC.position.y + rectC.height &&
            rectM.position.y + rectM.height > rectC.position.y) {
            console.log("collision detected!");   
            return true;
            }    
        else {
            return false;
        }
    // //     this.gamestate === GAMESTATE.GAMEOVER
        // }    
    }

    draw(ctx) {       
        this.gameObjects.forEach(object => object.draw(ctx))
    };    

    //     if (this.gamestate === GAMESTATE.PAUSED) {
    //         ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    //         ctx.fillStyle = "rgba(0,0,0,0.5)";
    //         ctx.fill();

    //         ctx.font = "30px Arial";
    //         ctx.fillStyle = "white";
    //         ctx.textAlign = "center";
    //         ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    //     }

    //     if (this.gamestate === GAMESTATE.MENU) {
    //         ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    //         ctx.fillStyle = "rgba(0,0,0,1)";
    //         ctx.fill();

    //         ctx.font = "30px Arial";
    //         ctx.fillStyle = "white";
    //         ctx.textAlign = "center";
    //         ctx.fillText(
    //             "press the UP arrow key to start",
    //             this.gameWidth / 2, 
    //             this.gameHeight / 2
    //             );
    //     }
    //     if (this.gamestate === GAMESTATE.GAMEOVER) {
    //         ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    //         ctx.fillStyle = "rgba(0,0,0,1)";
    //         ctx.fill();

    //         ctx.font = "30px Arial";
    //         ctx.fillStyle = "white";
    //         ctx.textAlign = "center";
    //         ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
    //     }
    // }

    // togglePause() {
    //     if (this.gamestate == GAMESTATE.PAUSED) {
    //         this.gamestate = GAMESTATE.RUNNING;
    //     } else {
    //         this.gamestate = GAMESTATE.PAUSED;
    //     }
    // }
}
