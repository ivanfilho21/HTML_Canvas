class Ball {
  constructor(context) {
    this.context = context
    this.x = 0
    this.y = 0
    this.speedX = 0
    this.speedY = 0

    this.color = 'black'
    this.radius = 10
  }

  update() {
    let ctx = this.context
    
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
    let ctx = this.context

    ctx.save()

    ctx.fillStyle = this.color

    ctx.beginPath()
    ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    )
    ctx.strokeStyle = '#999'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fill()

    ctx.restore()
  }
}