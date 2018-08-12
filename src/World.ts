import { Tile } from './Tile'

export class World {
    tiles: Tile[] = new Array<Tile>()

    constructor(app: PIXI.Application) {
        this.tiles.push(new Tile(app, 32, 32))
    }
}
