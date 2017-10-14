import Entity from "./Entity.js";
import {loadMarioSprites} from "./sprites.js";
import Velocity from "./traits/Velocity.js";
import Jump from "./traits/Jump.js";
import Go from "./traits/Go.js";

export function createMario() {
    return loadMarioSprites().then(marioSprites=>{
        const mario = new Entity()
        mario.size.set(14, 16);

        mario.draw = function (context) {
            marioSprites.draw('idle', context, this.pos.x, this.pos.y);
        }

        mario.addTrait(new Jump());
        mario.addTrait(new Go());
        return new Promise(resolve =>{
            setTimeout(resolve, 2000, mario);
        })

    })

}
