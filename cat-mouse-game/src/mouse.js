export default class Mouse {

    constructor(gameWidth, gameHeight) {
        this.image = document.getElementById("img_mouse");
        this.size = 60;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.maxSpeedX = 7;
        this.speedX = 0;
        this.maxSpeedY = 7;
        this.speedY = 0;

        this.position = {
            x: gameWidth / 2 - this.size / 2,
            y: gameHeight / 2 - this.size / 2
        }
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

    moveLeft() {
        this.speedX = -this.maxSpeedX;
    }

    moveRight() {
        this.speedX = this.maxSpeedX;
    }

    moveUp() {
        this.speedY = this.maxSpeedY;
    }    
    
    moveDown() {
        this.speedY = -this.maxSpeedY;
    }

    stop() {
        this.speedX = 0;
        this.speedY = 0;
    }

    update(deltaTime) {

        this.position.x += this.speedX;

            if (this.position.x < 0) this.position.x = 0;

            if (this.position.x + this.size > this.gameWidth)
                this.position.x = this.gameWidth - this.size;

        this.position.y += this.speedY;

            if (this.position.y < 0) this.position.y = 0;
    
            if (this.position.y + this.size > this.gameHeight)
                this.position.y = this.gameHeight - this.size;    
    }
}
