import Entity from "./Entity.js";
import {loadMarioSprites} from "./sprites.js";

export function createMario() {
    return loadMarioSprites().then(marioSprites=>{
        const mario = new Entity()
        mario.pos.set(64, 150);
        mario.vel.set(2, -10);

        mario.draw = function (context) {
            marioSprites.draw('idle', context, this.pos.x, this.pos.y);
        }

        mario.update = function() {
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
        }

        return mario;
    })

}
