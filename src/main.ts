import * as PIXI from 'pixi.js'

const Application = PIXI.Application
const Container = PIXI.Container
const loader = PIXI.loader
const resources = PIXI.loader.resources
const TextureCache = PIXI.utils.TextureCache
const Sprite = PIXI.Sprite

export const gridSize = 32
export const appWidth = 512
export const appHeight = 512

document.addEventListener(
    'DOMContentLoaded',
    () => {
        const renderer = PIXI.autoDetectRenderer(600, 400, {
            antialias: true,
            transparent: false,
            resolution: 1,
            backgroundColor: 0xffffff,
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

loader
    .add('./assets/ca.png')
    .add('./assets/street.png')
    .add('./assets/house.png')
    .load(setup)

// Define any variables that are used in more than one function
let state: any

function setup() {
    // Capture the keyboard arrow keys
    const left = keyboard(37)
    const up = keyboard(38)
    const right = keyboard(39)
    const down = keyboard(40)
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

// The `keyboard` helper function
function keyboard(keyCode: number) {
    const key: any = {}
    key.code = keyCode
    key.isDown = false
    key.isUp = true
    key.press = undefined
    key.release = undefined
    // The `downHandler`
    key.downHandler = (event: any) => {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) {
                key.press()
            }
            key.isDown = true
            key.isUp = false
        }
        event.preventDefault()
    }
    // The `upHandler`
    key.upHandler = (event: any) => {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) {
                key.release()
            }
            key.isDown = false
            key.isUp = true
        }
        event.preventDefault()
    }
    // Attach event listeners
    window.addEventListener('keydown', key.downHandler.bind(key), false)
    window.addEventListener('keyup', key.upHandler.bind(key), false)
    return key
}
