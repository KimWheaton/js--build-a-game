export default class InputHandler {

    constructor(mouse) {
        document.addEventListener("keydown", (event) => {
            switch(event.keyCode) {
                case 37:
                    mouse.moveLeft();
                    break;

                case 40:
                    mouse.moveUp();
                    break;     

                case 39:
                    mouse.moveRight();  
                    break;  

                case 38:
                    mouse.moveDown();
                    break;     

                // case 27:
                //     game.togglePause();
                //     break;    

                // case 32:
                //     game.start();
                //     break;    
            }
        });

        document.addEventListener("keyup", (event) => {
            switch(event.keyCode) {
                case 37:
                    if (mouse.speedX < 0) mouse.stop();
                    break;
                case 40:
                    if (mouse.speedY > 0) mouse.stop();
                    break;
                case 39:
                    if (mouse.speedX > 0) mouse.stop();  
                    break;  
                case 38:
                    if (mouse.speedY < 0) mouse.stop();  
                    break;      
            }
        });
    }
}