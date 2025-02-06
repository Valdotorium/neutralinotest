export function loadAssets(game){
    game.load.image("tile", "assets/images/gravel.png");

    if(game.options.get("loadMap") == true){
        //load tilemap data from JSON file
        game.load.json("tilemap", "assets/json/world.json");
    }

}

export function configureGame(game){
    game.options = new Map()
    game.options.set("loadMap", false)


    game.tileMapOptions = new Map();
    game.tileMapOptions.set("size", 20)

    game.frame = 0

}