import Mouse from "./mouse.js";
import Cat from "./cat.js";
import InputHandler from "./input.js";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.cat = new Cat(this);
        this.mouse = new Mouse(this);
        this.gameObjects = [];
    }

    start() {
        this.gameObjects = [
            this.mouse,
            this.cat
        ];

        new InputHandler(this.mouse, this);
    };

    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime))
    };

    detectCollision(mouse, cat) {
        let rectM = mouse
        let rectC = cat

        if (rectM.position.x < rectC.position.x + rectC.width &&
            rectM.position.x + rectM.width > rectC.position.x &&
            rectM.position.y < rectC.position.y + rectC.height &&
            rectM.position.y + rectM.height > rectC.position.y) {
            return true;
            }    
        else {
            return false;
        }
    };

    draw(ctx) {      
        this.gameObjects.forEach(object => object.draw(ctx))
    };    


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
}
