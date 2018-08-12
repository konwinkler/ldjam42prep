import * as PIXI from 'pixi.js'
import { gridSize } from './main'
import { Tile } from './Tile'

const offset = 12

export class Unit {
    sprite: PIXI.Sprite
    position: PIXI.Point

    constructor(app: PIXI.Application, public tile: Tile) {
        this.sprite = new PIXI.Sprite(PIXI.loader.resources['./assets/unit.png'].texture)

        this.setTile(this.tile)

        app.stage.addChild(this.sprite)
    }

    setTile(tile: Tile): any {
        if (tile === undefined) {
            return
        }

        this.tile = tile
        this.position = new PIXI.Point(tile.position.x + offset, tile.position.y + offset)
        this.sprite.position = this.position
    }
}
