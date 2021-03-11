class Hero extends Sprite {
  constructor(context, keyboard, loop) {
    super(context)
    this.keyboard = keyboard
    this.loop = loop
    this.width = 0
    this.height = 0
    this.direction = Sprite.DIRECTION_DOWN
    this.img = new Image()
  }

  update() {
    super.update()

    this.keyboard.hit(Keyboard.VK_LEFT, () => {
      this.direction = Sprite.DIRECTION_LEFT
    })

    this.keyboard.hit(Keyboard.VK_RIGHT, () => {
      this.direction = Sprite.DIRECTION_RIGHT
    })

    this.keyboard.hit(Keyboard.VK_UP, () => {
      this.direction = Sprite.DIRECTION_UP
    })

    this.keyboard.hit(Keyboard.VK_DOWN, () => {
      this.direction = Sprite.DIRECTION_DOWN
    })

    if (this.keyboard.isPressed(Keyboard.VK_LEFT) && this.x > 0) {
      this.direction = Sprite.DIRECTION_LEFT
      this.x -= 5
    }
    
    
    if (this.keyboard.isPressed(Keyboard.VK_RIGHT) && this.x < this.context.canvas.width - this.width) {
      this.direction = Sprite.DIRECTION_RIGHT
      this.x += 5
    }
    
    if (this.keyboard.isPressed(Keyboard.VK_UP) && this.y > 0) {
      this.direction = Sprite.DIRECTION_UP
      this.y -= 5
    }
    
    if (this.keyboard.isPressed(Keyboard.VK_DOWN) && this.y < this.context.canvas.height - this.height) {
      this.direction = Sprite.DIRECTION_DOWN
      this.y += 5
    }
  }

  draw() {
    super.draw()
    let ctx = this.context
    let rows = 2
    let cols = 2

    let cx = 0
    let cy = 0
    let cw = this.img.width / rows
    let ch = this.img.width / cols

    if (this.direction == Sprite.DIRECTION_UP) {
      cx = 0
      cy = 0
    } else if (this.direction == Sprite.DIRECTION_DOWN) {
      cx = 0
      cy = cw
    } else if (this.direction == Sprite.DIRECTION_LEFT) {
      cx = cw
      cy = ch
    } else {
      cx = cw
      cy = 0
    }

    // ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.img,
      cx, cy, cw, ch,
      this.x, this.y, this.width, this.height
    )
  }

  shoot() {
    let speed = 10
    let b = new Bullet(this.context)
    
    b.width = 15
    b.height = 5
    b.color = 'red'

    switch (this.direction) {
      case Sprite.DIRECTION_LEFT:
        b.x = this.x
        b.y = this.y + this.height / 2
        b.speedX = -speed
        b.speedY = 0
        break
      case Sprite.DIRECTION_RIGHT:
        b.x = this.x + this.width
        b.y = this.y + this.height / 2
        b.speedX = speed
        b.speedY = 0
        break
      case Sprite.DIRECTION_UP:
        b.x = this.x + this.width / 2
        b.y = this.y
        b.speedX = 0
        b.speedY = -speed
        break
      case Sprite.DIRECTION_DOWN:
        b.x = this.x + this.width / 2
        b.y = this.y + this.height
        b.speedX = 0
        b.speedY = speed
        break
      default:
        break;
    }

    this.loop.addSprite(b)
  }
}