import {loadLevel} from "./loaders.js";
import {createMario} from "./entities.js";
import Timer from "./Timer.js ";
import KeyboardState from "./KeyboardState.js";

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

const input = new KeyboardState();
input.listenTo(window);

const SPACE = 32;
Promise
    .all([ createMario(), loadLevel('1-1')])
    .then(([mario, level]) => {

        const gravity = 2000;
        mario.pos.set(64, 180);

        input.addMapping(SPACE, keyState =>{
            if(keyState){
                mario.jump.start();
            }else{
                mario.jump.cancel();
            }
        })

        level.entities.add(mario);
        const timer = new Timer(0.020);
        timer.update = function update(deltaTime) {
            level.update(deltaTime);
            level.comp.draw(context);
            mario.vel.y += gravity*deltaTime;
        }

        timer.start();
    })