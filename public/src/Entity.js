import {Vector2} from "./math.js";

export default class Entity {
    constructor(){
        this.pos = new Vector2(0, 0);
        this.vel = new Vector2(0, 0);
    }
}