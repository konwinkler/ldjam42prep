import * as PIXI from 'pixi.js'
import { gridSize } from './main'

export class Tile {
    sprite: PIXI.Sprite
    public position: PIXI.Point

    constructor(app: PIXI.Application, public x: number, public y: number) {
        this.sprite = new PIXI.Sprite(PIXI.loader.resources['./assets/tile.png'].texture)

        this.position = new PIXI.Point(this.x * gridSize, this.y * gridSize)
        this.sprite.position = this.position

        app.stage.addChild(this.sprite)
    }
}
