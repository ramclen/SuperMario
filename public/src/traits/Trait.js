export default class Trait{
    constructor(name){
        this.NAME = name;
    }

    update(entity, deltaTime){
        console.warn(`Unhandled update call in Trait ${this.NAME}`);
    }
}