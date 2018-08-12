import { Direction } from './Direction'
import { Tile } from './Tile'
import { Unit } from './Unit'

export class World {
    tiles: Tile[] = new Array<Tile>()
    units: Unit[] = new Array<Unit>()

    constructor(app: PIXI.Application) {
        this.tiles.push(new Tile(app, 1, 1))
        this.tiles.push(new Tile(app, 1, 2))
        this.tiles.push(new Tile(app, 2, 1))
        this.tiles.push(new Tile(app, 2, 2))

        this.units.push(new Unit(app, this.tiles[0]))
    }

    move(unit: number, direction: Direction): any {
        this.units[0].setTile(this.tiles[1])
    }
}
