export default class Cat {

//?Create an array of cats so they can be from different positions and directions?
    
    constructor(game) {
        this.image = document.getElementById("img_cat2");
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.width = 80;
        this.height = 100;
        this.position = { x: 100, y: 400 };
        this.speed = { x: 3, y: -2 };
    }

    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            );
    }    
    
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }    
}