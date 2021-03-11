class Hero extends Sprite {
  constructor(context, keyboard, img) {
    super(context)
    this.keyboard = keyboard
    this.width = 100
    this.height = 100
    this.speed = 2.5

    this.sheet = new Spritesheet(context, img, 4, 4)
    this.sheet.interval = 60
  }

  update() {
    super.update()

    if (this.keyboard.isPressed(Keyboard.VK_DOWN)) {
      if (!this.moving || this.direction != Sprite.DIRECTION_DOWN) {
        this.sheet.row = 0
      }

      this.moving = true
      this.sheet.nextFrame()
      this.direction = Sprite.VK_DOWN

      if (this.y < this.context.canvas.height - this.height) {
        this.y += this.speed
      }
    } else if (this.keyboard.isPressed(Keyboard.VK_LEFT)) {
      if (!this.moving || this.direction != Sprite.DIRECTION_LEFT) {
        this.sheet.row = 1
      }

      this.moving = true
      this.sheet.nextFrame()
      this.direction = Sprite.VK_LEFT

      if (this.x > 0) {
        this.x -= this.speed
      }
    } else if (this.keyboard.isPressed(Keyboard.VK_RIGHT)) {
      if (!this.moving || this.direction != Sprite.DIRECTION_RIGHT) {
        this.sheet.row = 2
      }

      this.moving = true
      this.sheet.nextFrame()
      this.direction = Sprite.VK_RIGHT

      if (this.x < this.context.canvas.width - this.width) {
        this.x += this.speed
      }
    } else if (this.keyboard.isPressed(Keyboard.VK_UP)) {
      if (!this.moving || this.direction != Sprite.DIRECTION_UP) {
        this.sheet.row = 3
      }
      
      this.moving = true
      this.sheet.nextFrame()
      this.direction = Sprite.VK_UP

      if (this.y > 0) {
        this.y -= this.speed
      }
    } else {
      switch (this.direction) {
        case Sprite.DIRECTION_DOWN:
          this.sheet.row = 0
          break
        case Sprite.DIRECTION_LEFT:
          this.sheet.row = 1
          break
        case Sprite.DIRECTION_RIGHT:
          this.sheet.row = 2
          break
        case Sprite.DIRECTION_UP:
          this.sheet.row = 3
          break
      }

      this.sheet.col = 0
      this.moving = false
    }
  }

  draw() {
    super.draw()
    let ctx = this.context
    let rows = 2
    let cols = 2

    let cx = 0
    let cy = 0
    let cw = this.sheet.img.width / rows
    let ch = this.sheet.img.width / cols

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

    this.sheet.draw(this.x, this.y, this.width, this.height)
  }
}