window.onload = () => {
  var canvas = document.querySelector('#canvas')
  var ctx = canvas.getContext('2d')
  var kbd = new Keyboard(document)
  var loop = new Loop(ctx)

  var hero = new Hero(ctx, kbd, loop)
  hero.img.src = 'spritesheet.png'
  hero.width = 150
  hero.height = 150

  kbd.hit(Keyboard.VK_SPACE, () => {
    hero.shoot()
  })

  loop.addSprite(hero)
  loop.run()
}