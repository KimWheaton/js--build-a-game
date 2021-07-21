export default class Cat {

    constructor(game) {
        this.image = document.getElementById("img_cat");
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.size = 80;
        this.reset();
    }

    reset() {
        this.position = { x: 100, y: 400 };
        this.speed = { x: 3, y: -2 };
    }

    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
            );
    }    
    
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // if (detectCollision(this, this.game.paddle)) {
        //     this.speed.y = -this.speed.y;
        //     this.position.y = this.game.paddle.position.y - this.size;
        // }
    }    
}