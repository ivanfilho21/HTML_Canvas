var canvas = null
var ctx = null
var timeBefore = 0
var queenImg = new Image()


// Cursor
var cX = 10;
var cY = 10;

window.onload = () => {
  canvas = document.querySelector('#main_canvas')
  ctx = canvas.getContext('2d')
  // let queenImg = document.querySelector('#the_queen_img')
  
  queenImg.src = 'img/the-queen.png'
  queenImg.onload = () => {
    if (cX >= canvas.width && cY >= canvas.height) {
      return
    }

    timeBefore = new Date().getTime()
    window.requestAnimationFrame(moveCursor)
  }
}

function showQueen() {
  let posX = 12
  let posY = 12
  let space = 12
  let width = queenImg.width/3
  let height = queenImg.height/3

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 5; j++) {
      ctx.drawImage(
        queenImg, // source
        55, 70, width, height, // clipping
        posX, posY, width, height // canvas
      )
      posX += width + space
    }
    posX = 12
    posY += height + space
  }

  for (let i = 0; i < 5; i++) {
    ctx.drawImage(queenImg, posX, posY, width, height)
    posX += width + space
  }
}


function moveCursor() {
  let timeNow = new Date().getTime()
  let timeDiff = timeNow - timeBefore
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  showQueen()
  
  // ctx.fillStyle = '#333'
  // ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  ctx.strokeStyle = 'yellow'
  ctx.lineWidth = 10
  ctx.strokeRect(cX, cY, 45, 57)

  
  if (cX < (45 + 12) * 4) {
    cX += (45 + 8) * timeDiff / 1000
  } else {
    cX = 10
    if (cY < (57 + 12) * 2) {
      cY += 57 + 8
    } else {
      cX = 10
      cY = 10
    }
  }

  timeBefore = timeNow

  requestAnimationFrame(moveCursor)
}