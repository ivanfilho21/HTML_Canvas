class Sprite {
  static get DIRECTION_LEFT() { return 0 }
  static get DIRECTION_RIGHT() { return 1 }
  static get DIRECTION_UP() { return 2 }
  static get DIRECTION_DOWN() { return 3 }
  
  constructor(context) {
    this.context = context
    this.x = 0
    this.y = 0
    this.speed = 0
    this.moving = false
    this.direction = Sprite.DIRECTION_DOWN
  }

  update() {}

  draw() {}
}