class Tank extends Sprite {
  constructor(context, image) {
    super(context)
    
    this.speed = 1
    this.sheet = new Spritesheet(context, img, 2, 2)
    this.sheet.row = 0
    this.sheet.col = 1
    this.sheet.interval = 60
  }

  update() {
    super.update()

    if (this.x + this.width == this.context.canvas.width || this.x < 0) {
      this.speed *= -1

      if (this.speed < 0) {
        this.sheet.row = 1
        this.sheet.col = 1
      } else {
        this.sheet.row = 0
        this.sheet.col = 1
      }
    }

    this.x += this.speed
  }

  draw() {
    super.draw()
    this.sheet.draw(this.x, this.y, this.width, this.height)
  }
}