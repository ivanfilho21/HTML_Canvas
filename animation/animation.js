class Sprite {
  constructor(src) {
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
    this.clipX = 0
    this.clipY = 0
    this.clipW = 0
    this.clipH = 0
    this.speed = 150
    this.img = new Image()
    this.img.src = src
    this.toRight = true
  }
}

var canvas = null
var ctx = null
var timeThen = null

window.onload = () => {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')

  ctx.fillStyle = '#333'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  let masterBall = new Sprite('master_ball.png')
  masterBall.width = 40
  masterBall.height = 40
  masterBall.clipX = masterBall.x
  masterBall.clipY = masterBall.y
  masterBall.clipW = masterBall.img.width
  masterBall.clipH = masterBall.img.height


  /* masterBall.img.onload = () => {
    timeThen = new Date().getTime()
    requestAnimationFrame(() => moveSpriteHorizontally(masterBall))
  } */

  let megaman = new Sprite('megaman_sheet.png')
  megaman.x = 0
  megaman.y = 100
  megaman.width = 46
  megaman.height = 64
  megaman.clipX = 0
  megaman.clipY = 92
  megaman.clipW = 32
  megaman.clipH = 42

  megaman.img.onload = () => {
    timeThen = new Date().getTime()
    requestAnimationFrame(() => moveSpriteHorizontally(megaman))
  }
}

function moveSpriteHorizontally(sprite) {
  let timeNow = new Date().getTime()
  let timeDiff = timeNow - timeThen

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  //
  ctx.drawImage(
    sprite.img,
    sprite.clipX, sprite.clipY, sprite.clipW, sprite.clipH,
    sprite.x, sprite.y,
    sprite.width, sprite.height
  )

  if (sprite.clipX < sprite.img.width) {
    sprite.clipX += sprite.clipW * timeDiff / 1000
  } else {
    sprite.clipX = 0
  }

  //

  if (sprite.toRight) {
    if (sprite.x < canvas.width - sprite.width) {
      sprite.x += sprite.speed * timeDiff/1000
    } else {
      sprite.toRight = false
      sprite.speed = 400
    }
  } else {
    if (sprite.x >= 0) {
      sprite.x = sprite.x - (sprite.speed * timeDiff/1000)
    } else {
      sprite.toRight = true
      sprite.speed = 150
    }
  }

  timeThen = timeNow
  requestAnimationFrame(() => moveSpriteHorizontally(sprite))
}

function moveSpriteVertically(sprite) {
  let timeNow = new Date().getTime()
  let timeDiff = timeNow - timeThen

  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

