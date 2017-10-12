import {loadLevel} from "./loaders.js";
import Compositor from "./Compositor.js";
import {loadBackgroundSprites} from "./sprites.js";
import {createBackgroundLayer} from "./layers.js";
import {createMario} from "./entities.js";
import Timer from "./Timer.js ";
import KeyboardState from "./KeyboardState.js";

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

const input = new KeyboardState();
input.listenTo(window);

function createSpriteLayer(entity) {
    return function drawSpriteLayer() {
        entity.draw(context);
    }
}

const SPACE = 32;
Promise
    .all([loadBackgroundSprites(), createMario(), loadLevel('1-1')])
    .then(([sprites, mario, level]) => {
        const comp = new Compositor();

        const backgroundLayer = createBackgroundLayer(level.backgrounds, sprites);
        comp.layers.push(backgroundLayer);

        const gravity = 2000;
        mario.pos.set(64, 180);

        input.addMapping(SPACE, keyState =>{
            console.log(event);
            if(keyState){
                mario.jump.start();
            }else{
                mario.jump.cancel();
            }
        })

        const spriteLayer = createSpriteLayer(mario);
        comp.layers.push(spriteLayer);

        const timer = new Timer(0.020);
        timer.update = function update(deltaTime) {
            mario.update(deltaTime);
            comp.draw(context);
            mario.vel.y += gravity*deltaTime;
        }

        timer.start();
    })