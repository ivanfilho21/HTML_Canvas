class Ball {
  constructor(ctx, radius, color) {
    this.context = ctx
    this.x = 0
    this.y = 0
    this.speedX = 5
    this.speedY = 5
    this.color = color
    this.radius = radius
    this.moving = true

    this.x += this.radius
    this.y += this.radius
  }

  update() {
    let ctx = this.context

    if (!this.moving) {
      return
    }

    if (this.x < this.radius || this.x > ctx.canvas.width - this.radius) {
      this.speedX *= -1
    }

    if (this.y < this.radius || this.y > ctx.canvas.height - this.radius) {
      this.speedY *= -1
    }

    this.x += this.speedX
    this.y += this.speedY
  }

  draw() {
    let c = this.context
    c.save()
    c.beginPath()
    c.arc(
      this.x,
      this.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    )
    c.fillStyle = this.color
    c.fill()
    // c.strokeStyle = this.color
    c.stroke()

    // c.lineWidth = 10
    c.strokeRect(
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
      )

    c.restore()
  }

  collisionRects() {
    return [
      {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius * 2,
        height: this.radius * 2
      }
    ]
  }

  collidesWith(sprite) {
    // this.speedX *= -1
    // this.speedY *= -1

    if (this.x < sprite.x) {
      this.speedX = -Math.abs(this.speedX)
    } else {
      this.speedX = Math.abs(this.speedX)
    }

    if (this.y < sprite.y) {
      this.speedY = -Math.abs(this.speedY)
    } else {
      this.speedY = Math.abs(this.speedY)
    }
  }
}