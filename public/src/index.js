import {loadLevel} from "./loaders.js";
import {createMario} from "./entities.js";
import Timer from "./Timer.js ";
import {setupKeyboard} from "./input.js";
import {createCollisionLayer} from "./layers.js";

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");


Promise
    .all([ createMario(), loadLevel('1-1')])
    .then(([mario, level]) => {
        mario.pos.set(64, 180);

        const input = setupKeyboard(mario);
        input.listenTo(window);

        level.entities.add(mario);
        const timer = new Timer(0.020);
        timer.update = function update(deltaTime) {
            level.update(deltaTime);
            level.comp.draw(context);
        }

        timer.start();
    })