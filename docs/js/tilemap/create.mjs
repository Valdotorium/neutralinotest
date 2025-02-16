import { Tilemap } from "../generator/generate.mjs"
export function generateTilemap(game){
    //get the tilemap size
    const mapSize = game.tileMapOptions.get("size")
    if (mapSize < 10){ mapSize = 10 }
    if (mapSize > 250){ mapSize = 250 }

    console.log("map size is: ", mapSize)
    //generate a tilemap array with values between 0 and 1
    
    game.generatedTilemap = Tilemap(mapSize)
    //translate values < 0.25 to 22, values < 0.5 to 2, values < 0.75 to 1, others to 6 by looping through the two dimensional array
    for(let i = 0; i < mapSize; i++){
        for(let j = 0; j < mapSize; j++){
            if(game.generatedTilemap[i][j] < 0.45){
                game.generatedTilemap[i][j] = 22
            }else if(game.generatedTilemap[i][j] < 0.5){
                game.generatedTilemap[i][j] = 0
            } else if(game.generatedTilemap[i][j] < 0.55){
                game.generatedTilemap[i][j] = 2
            } else {
                game.generatedTilemap[i][j] = 6
            }
        }
    }
    

    //tiles sized 8x8 are placed in a 6x6 grid, allowed to overlap 1 px each side
    game.tileMap = game.make.tilemap({ data: game.generatedTilemap, tileWidth: 6, tileHeight: 6, width: mapSize, height: mapSize}).setLayerTileSize(8,8)
    let tileset = game.tileMap.addTilesetImage('tileset', null, 8,8);
    //create a tilemap layer with the generated tilemap array and the tileset, and place it at (100,100) on the screen, with a scale of 4
    const layer = game.tileMap.createLayer(0, tileset,100,100);
    layer.setScale(4);
    game.cameras.main.setBounds(0,0, layer.width * layer.scale + 200, layer.height * layer.scale + 200);

}