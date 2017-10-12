import Entity from "./Entity.js";
import {loadMarioSprites} from "./sprites.js";
import Velocity from "./traits/Velocity.js";
import Jump from "./traits/Jump.js";

export function createMario() {
    return loadMarioSprites().then(marioSprites=>{
        const mario = new Entity()

        mario.draw = function (context) {
            marioSprites.draw('idle', context, this.pos.x, this.pos.y);
        }

        mario.addTrait(new Velocity());
        mario.addTrait(new Jump());
        return new Promise(resolve =>{
            setTimeout(resolve, 2000, mario);
        })

    })

}
