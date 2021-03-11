class Keyboard {
  static get VK_SPACE() { return 32 }
  static get VK_LEFT() { return 37 }
  static get VK_UP() { return 38 }
  static get VK_RIGHT() { return 39 }
  static get VK_DOWN() { return 40 }

  constructor(elem) {
    let keyboard = this
    this.pressed = []
    this.fired = []
    this.firedCallbacks = []

    elem.addEventListener('keydown', (e) => {
      let key = e.keyCode
      keyboard.pressed[key] = true

      if (keyboard.firedCallbacks[key] && !keyboard.fired[key]) {
        keyboard.fired[key] = true
        keyboard.firedCallbacks[key]()
      }
    })
    elem.addEventListener('keyup', (e) => {
      let key = e.keyCode
      keyboard.pressed[key] = false
      keyboard.fired[key] = false
    })
  }

  isPressed(key) {
    return this.pressed[key]
  }

  hit(key, callback) {
    this.firedCallbacks[key] = callback
  }
}