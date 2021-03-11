class Bullet extends Sprite {
  constructor(context) {
    super(context)
    this.speedX = 0
    this.speedY = 0
    this.color = 'black'
    this.radius = 10
  }

  update() {
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