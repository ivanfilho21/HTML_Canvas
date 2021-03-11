class Spritesheet {
  constructor(ctx, img, rows, cols) {
    this.context = ctx
    this.img = img
    this.rows = rows
    this.columns = cols
    this.row = 0
    this.col = 0
    this.interval = 0
    this.lastTime = new Date().getTime()
  }

  nextFrame() {
    let timeNow = new Date().getTime()

    if (!this.lastTime) {
      this.lastTime = timeNow
    }

    if (timeNow - this.lastTime < this.interval) {
      return
    }

    if (this.col < this.columns -1)
      this.col++
    else
      this.col = 0

    this.lastTime = timeNow
  }

  draw(x, y, width, height) {
    let cw = this.img.width / this.columns
    let ch = this.img.height / this.rows

    this.context.drawImage(
      this.img,
      cw * this.col,
      ch * this.row,
      cw,
      ch,
      x,
      y,
      width,
      height
    )
  }
}