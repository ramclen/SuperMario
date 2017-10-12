import {loadLevel} from "./loaders.js";
import Compositor from "./Compositor.js";
import {loadBackgroundSprites} from "./sprites.js";
import {createBackgroundLayer} from "./layers.js";
import {createMario} from "./entities.js";
import Timer from "./Timer.js ";

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

function createSpriteLayer(entity) {
    return function drawSpriteLayer() {
        entity.draw(context);
    }
}

Promise
    .all([loadBackgroundSprites(), createMario(), loadLevel('1-1')])
    .then(([sprites, mario, level]) => {
        const comp = new Compositor();

        const backgroundLayer = createBackgroundLayer(level.backgrounds, sprites);
        comp.layers.push(backgroundLayer);

        const gravity = 0.5;

        const spriteLayer = createSpriteLayer(mario);
        comp.layers.push(spriteLayer);

        const timer = new Timer(1 / 60);

        timer.update = function update() {
            comp.draw(context);
            mario.update();
            mario.vel.y += gravity;
        }

        timer.start();
    })