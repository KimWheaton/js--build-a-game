export function detectCollision() {
    let mouse;
    let cat;

    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].isColliding = false;
    }

    for (let i = 0; i < gameObjects.length; i++) {
        mouse = gameObjects[i];
        for (let j = i + 1; j < gameObjects.length; j++)
        {
            cat = gameObjects[j];

            if (rectIntersect(mouse.x, mouse.y, mouse.width, mouse.height, cat.x, cat.y, cat.width, cat.height)) {
                mouse.isColliding = true;
                cat.isColliding = true;
            }
        }
    }

    rectIntersect()
}


