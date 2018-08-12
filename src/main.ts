import * as PIXI from 'pixi.js'
import { Keyboard } from './Keyboard'
import { World } from './World'

const Application = PIXI.Application
const Container = PIXI.Container
const loader = PIXI.loader
const resources = PIXI.loader.resources
const TextureCache = PIXI.utils.TextureCache
const Sprite = PIXI.Sprite

export const gridSize = 42
export const appWidth = gridSize * 18
export const appHeight = gridSize * 10

document.addEventListener(
    'DOMContentLoaded',
    () => {
        const renderer = PIXI.autoDetectRenderer(600, 400, {
            antialias: true,
            transparent: false,
            resolution: 1,
        })
    },
    false
)

const config: PIXI.ApplicationOptions = {
    width: appWidth,
    height: appHeight,
    antialias: true,
    transparent: false,
    resolution: 1,
}

const app = new Application(config)
document.body.appendChild(app.view)

app.renderer.backgroundColor = 0xc0c0c0

loader
    .add('./assets/tile.png')
    .add('./assets/unit.png')
    .load(setup)

// Define any variables that are used in more than one function
let state: any

function setup() {
    const keyboard = new Keyboard()
    const world = new World(app)

    // Capture the keyboard arrow keys
    const left = keyboard.inputHandler(37)
    const up = keyboard.inputHandler(38)
    const right = keyboard.inputHandler(39)
    const down = keyboard.inputHandler(40)
    // left.press = () => {}
    // left.release = () => {}
    // up.press = () => {}
    // up.release = () => {}
    // right.press = () => {}
    // right.release = () => {}
    // down.press = () => {}
    // down.release = () => {}

    state = play
    // Start the game loop
    app.ticker.add(delta => gameLoop(delta))
}

function gameLoop(delta: number) {
    // Update the current game state:
    state(delta)
}

function play(delta: number) {
    // update game objects
}
