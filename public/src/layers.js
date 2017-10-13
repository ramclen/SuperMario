

export function createSpriteLayer(entities) {
    return function drawSpriteLayer(context) {
        entities.forEach(entity =>{
            entity.draw(context);
        })
    }
}

export function createBackgroundLayer(level, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 256;
    buffer.height = 240;

    const context = buffer.getContext('2d');

    level.tiles.forEach((tile, x, y)=>{
        sprites.drawTile(tile.name, context, x, y);
    });

    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    };
}


function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2])=>{
        for(let x = x1; x<x2; x++)
            for(let y = y1; y<y2; y++)
                sprites.drawTile(background.tile, context, x, y);
    });
}