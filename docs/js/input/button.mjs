

export class Button{
    constructor(game, x, y, text, style, callback){
        this.text = game.add.text(x, y, text, style)
        //add a rect
        this.rect = game.add.rectangle(x, y, this.text.width + 10, this.text.height + 10, 0x222222)
        this.rect.setInteractive()
        this.rect.setOrigin(0.5, 0.5)
        //delete and readd the text
        this.text.destroy()
        this.text = game.add.text(x, y, text, style)
        this.text.setOrigin(0.5, 0.5)
        this.rect.on('pointerdown', () => {this.activate(), callback(game)})
        this.rect.on('pointerup', () => this.deactivate())
        this.rect.on("pointerover", () => this.hover())
        this.rect.on("pointerout", () => this.out())

    }
    activate(){
        this.text.setColor("#333333")
        this.rect.fillColor = 0xCCCCCC
    }
    deactivate(){
        this.text.setColor("#BBBBBB")
        this.rect.fillColor = 0x222222
    }
    hover(){
        this.text.setColor("#333333")
        this.rect.fillColor = 0xCCCCCC
    }
    out(){
        this.text.setColor("#BBBBBB")
        this.rect.fillColor = 0x222222
    }
}
