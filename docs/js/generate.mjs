function generateTilemapArray(mapSize){
    //generate a tilemap array with widt mapSize and height mapSize
    const tilemapArray = Array.from({length: mapSize}, () => Array.from({length: mapSize}, () => 0));

    //fill the array with random numbers between 0 and 15
    for(let i = 0; i < mapSize; i++){
        for(let j = 0; j < mapSize; j++){
            tilemapArray[i][j] = Math.floor(Math.random() * 15);
        }
    }
    return tilemapArray;
}


export function generateTilemap(game){
    //get the tilemap size
    const mapSize = game.tileMapOptions.get("size")

    console.log("map size is: ", mapSize)
    //generate a tilemap array
    game.generatedTilemap = generateTilemapArray(mapSize)
    
    game.tileMap = game.make.tilemap({ data: game.generatedTilemap, tileWidth: 8, tileHeight: 8, width: mapSize, height: mapSize})
    const tileset = game.tileMap.addTilesetImage('tileset');
    const layer = game.tileMap.createLayer(0, tileset,0,0);
    layer.setScale(4);

    const cursors = game.input.keyboard.createCursorKeys();

    const controlConfig = {
        camera: game.cameras.main,
        left: cursors.left,
        right: cursors.right,
        speed: 0.25
    };

    game.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

    game.cameras.main.setBounds(0, 0, layer.width + 1000, 600);
}