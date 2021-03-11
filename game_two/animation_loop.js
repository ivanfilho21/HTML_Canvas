class AnimationLoop {
  constructor(context) {
    this.context = context
    this.sprites = []
    this.running = false
  }

  addSprite(sprite) {
    this.sprites.push(sprite)
  }

  run() {
    this.running = true
    this.nextFrame()
  }

  stop() {
    this.running = false
  }

  clear() {
    let ctx = this.context
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  nextFrame() {
    if (!this.running) {
      return
    }

    this.clear()

    for (let i in this.sprites) {
      this.sprites[i].update()
    }

    for (let i in this.sprites) {
      this.sprites[i].draw()
    }

    let loop = this
    requestAnimationFrame(() => loop.nextFrame())
  }
}