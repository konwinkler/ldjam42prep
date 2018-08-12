import * as PIXI from 'pixi.js'

export class Tile {
    sprite: PIXI.Sprite

    constructor(app: PIXI.Application, private x: number, private y: number) {
        this.sprite = new PIXI.Sprite(PIXI.loader.resources['./assets/tile.png'].texture)
        this.sprite.x = this.x
        this.sprite.y = this.y

        app.stage.addChild(this.sprite)
    }
}
