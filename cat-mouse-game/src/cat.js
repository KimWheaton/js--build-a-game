export default class Cat {
 
    constructor(game, image) {
        this.image = image;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.width = 80;
        this.height = 100;
        this.speed = { 
            x: Math.floor(Math.random() * 5),
            y: Math.floor(Math.random() * -4) 
            }
        this.position = {
            x: Math.floor(Math.random() * this.gameWidth - this.width / 2),
            y: Math.floor(Math.random() * this.gameHeight - this.height / 2)
            }
        };
    
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

        if (this.position.x > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }
        if (this.position.y > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
    }    
}