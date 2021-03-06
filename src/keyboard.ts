export class Keyboard {
    // The `keyboard` helper function
    inputHandler(keyCode: number) {
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
}
