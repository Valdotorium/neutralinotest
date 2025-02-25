import { Button } from "../input/button.mjs"


let launchGame = function launchGame(game) {
    //temporary, replace with your own logic when you have it
    game.scene.start("GameScene")
    game.scene.stop("StartMenuScene")
}

let launchSettings = function launchSettings(game){
    game.scene.start("SettingsScene")
    game.scene.stop("StartMenuScene")
}

export function setupStartMenu(game){
    //menu background image
    game.startMenuUI = {}
    game.startMenuUI.startMenuBackground = game.add.image(0,0, "startMenuBackground").setScale(1.2)
    game.startMenuUI.startMenuBackground.setOrigin(0,0)
    //start game button
    let textStyle = { fontFamily: 'Arial Black', fontSize: 40, color: '#888888'};
    game.startMenuUI.startButton = new Button(game, 600, 420,"START GAME",textStyle, launchGame)
    //settings button
    game.startMenuUI.settingsButton = new Button(game, 600, 500,"SETTINGS",textStyle, launchSettings)
    //game title with text effects
    textStyle = { fontFamily: 'Arial Black', fontSize: 150, color: '#555555'};
    game.startMenuUI.title = game.add.text(294, 94, game.name, textStyle);
    textStyle = { fontFamily: 'Arial Black', fontSize: 150, color: '#FFFFFF'};
    game.startMenuUI.title = game.add.text(306, 106, game.name, textStyle);
    textStyle = { fontFamily: 'Arial Black', fontSize: 150, color: '#BBBBBB'};
    game.startMenuUI.title = game.add.text(300, 100, game.name, textStyle);

}


export function updateStartMenu(game){
    //slow circular motion of background image
    game.startMenuUI.startMenuBackground.setOrigin(0.2+Math.sin(game.frame * 0.001)/6,0.2+Math.cos(game.frame * 0.001)/6)
}