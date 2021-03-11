var ctx = document.querySelector('#canvas').getContext('2d')
var kbd = new Keyboard(document)
var loop = new AnimationLoop(ctx)

let img = new Image()
img.src = 'img/red_spritesheet.png'

var hero = new Hero(ctx, kbd, img)
hero.width = 60
hero.height = 50

img = new Image()
img.src = 'img/tank_spritesheet.png'
var tank = new Tank(ctx, img)
tank.width = 150
tank.height = 150
tank.x = 0
tank.y = ctx.canvas.height - tank.height

loop.addSprite(hero)
loop.addSprite(tank)

/* img.onload = () => */ loop.run()