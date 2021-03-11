class Collider {
  constructor() {
    this.sprites = []
    this.onCollide = null
  }

  addSprite(sprite) {
    this.sprites.push(sprite)
  }

  process() {
    for (let i in this.sprites) {
      for (let j in this.sprites) {
        if (i == j) {
          continue
        }

        this.checkCollision(this.sprites[i], this.sprites[j])
      }
    }
  }

  checkCollision(spriteA, spriteB) {
    let rectsA = spriteA.collisionRects()
    let rectsB = spriteB.collisionRects()
    let sXA = spriteA.speedX
    let sXB = spriteB.speedX
    let sYA = spriteA.speedY
    let sYB = spriteB.speedY

    breakpoint:
    for (let i in rectsA) {
      for (let j in rectsB) {
        if (this.isColliding(rectsA[i], rectsB[j], sXA, sXB, sYA, sYB)) {
          spriteA.collidesWith(spriteB)
          spriteB.collidesWith(spriteA)

          if (this.onCollide) {
            this.onCollide(spriteA, spriteB)
          }

          break breakpoint
        }
      }
    }
  }

  isColliding(rA, rB, speedXA, speedXB, speedYA, speedYB) {
    return (rA.x + rA.width + speedXA) > rB.x &&
          rA.x < (rB.x + rB.width + speedXB) &&
          (rA.y + rA.height + speedYA) > rB.y &&
          rA.y < (rB.y + rB.height + speedYB)
  }
}