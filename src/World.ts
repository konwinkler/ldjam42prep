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

    move(unitIndex: number, direction: Direction): any {
        const unit = this.units[unitIndex]
        switch (direction) {
            case Direction.RIGHT:
                unit.setTile(this.findTileAtTile(unit.tile.x + 1, unit.tile.y))
                break
            case Direction.LEFT:
                unit.setTile(this.findTileAtTile(unit.tile.x - 1, unit.tile.y))
                break
            case Direction.UP:
                unit.setTile(this.findTileAtTile(unit.tile.x, unit.tile.y - 1))
                break
            case Direction.DOWN:
                unit.setTile(this.findTileAtTile(unit.tile.x, unit.tile.y + 1))
                break
        }
    }

    private findTileAtTile(x: number, y: number): Tile {
        return this.tiles.find(tile => {
            return tile.x === x && tile.y === y
        })
    }
}
