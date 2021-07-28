import Mouse from "./mouse.js";
import Cat from "./cat.js";
import InputHandler from "./input.js";

const image1 = document.getElementById("img_cat1");
const image2 = document.getElementById("img_cat2");
const image3 = document.getElementById("img_cat1");
const image4 = document.getElementById("img_cat2");


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");


export default class Game {
    constructor(gameWidth, gameHeight, image) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.cats = this.createCatArray();
        this.mouse = new Mouse(this);
        this.gameObjects = [];
    }

    createCatArray = function() {
        let cats = []
        let images = [
            image1,
            image2,
            image3,
            image4
        ];
        for (let image of images) {
            let c = new Cat(this, image);
            cats.push(c)
        }
        return cats;
    };

    start() {
        this.gameObjects = [
            this.mouse,
        ];
        for (let cat of this.cats) {
            this.gameObjects.push(cat)
        }

        new InputHandler(this.mouse, this);
    };

    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime))
    };

    detectCollision(mouse, cats) {
        let rectM = mouse
        let rectC = cats

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
}
