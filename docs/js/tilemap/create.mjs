import { Tilemap } from "../generator/generate.mjs"
export function generateTilemap(game){
    //get the tilemap size
    let mapSize = game.tileMapOptions.get("size")
    //if (mapSize < 10){ mapSize = 10 }
    //if (mapSize > 250){ mapSize = 250 }

    console.log("map size is: ", mapSize)
    //generate a tilemap array with values between 0 and 1
    
    game.generatedTilemap = Tilemap("complex",mapSize)
    //draw a blue rectangle behind the tilemap
    game.add.rectangle(4,4, mapSize * 24, mapSize * 24, 0xb4cee0).setOrigin(0,0).setDepth(-1);

    

    //tiles sized 8x8 are placed in a 6x6 grid, allowed to overlap 1 px each side
    game.tileMap = game.make.tilemap({ data: game.generatedTilemap, tileWidth: 6, tileHeight: 6, width: mapSize, height: mapSize}).setLayerTileSize(8,8)
    //loop through game.tilesets

    game.currentTilesetImage = game.tileMap.addTilesetImage(game.tilesets[0].name, game.tilesets[0].name, 8, 8)

    game.currentTileset = 0
    //create a tilemap layer with the generated tilemap array and the tileset, and place it at (100,100) on the screen, with a scale of 4
    const layer = game.tileMap.createLayer(0, game.tileMap.tilesets[0],0,0);
    layer.setScale(4);
    game.tileMap.layer = layer
    game.cameras.main.setBounds(-600,-400, layer.width * layer.scale + 1200, layer.height * layer.scale + 800);
    //make tilemap clickable
    game.currentSelectedTile = {x: 0, y: 0}
    game.input.on("pointerdown", function(pointer, gameObject)
    {
        game.currentSelectedTile = game.currentHoveredTile
    })

}