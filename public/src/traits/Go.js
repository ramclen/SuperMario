import Trait from "./Trait.js";

export default class Jump extends Trait{
    constructor(){
        super('go');

        this.dir = 0;
        this.speed = 6000;
    }

    update(entity, deltaTime){
        entity.vel.x = this.dir * this.speed *deltaTime;
    }
}