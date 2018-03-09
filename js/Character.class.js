class Character {
  constructor (keyboardHandler, texture, x, y, map) {
    this.keyboardHandler = keyboardHandler
    this.baseTexture = texture
    this.map = map

    this.animationTextures = {}
    this.animationTextures.goDown = []
    this.animationTextures.goDown.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(0, 0, 30, 30)))
    this.animationTextures.goDown.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(30, 0, 30, 30)))
    this.animationTextures.goDown.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(60, 0, 30, 30)))
    this.animationTextures.goDown.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(90, 0, 30, 30)))
    this.animationTextures.goDown.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(120, 0, 30, 30)))
    this.animationTextures.goDown.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(150, 0, 30, 30)))
    this.animationTextures.goDown.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(180, 0, 30, 30)))
    this.animationTextures.goDown.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(210, 0, 30, 30)))


    this.animationTextures.goRight = []
    this.animationTextures.goRight.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(240, 30, 30, 30)))
    this.animationTextures.goRight.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(270, 30, 30, 30)))
    this.animationTextures.goRight.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(300, 30, 30, 30)))
    this.animationTextures.goRight.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(330, 30, 30, 30)))
    this.animationTextures.goRight.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(360, 30, 30, 30)))
    this.animationTextures.goRight.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(390, 30, 30, 30)))

    this.animationTextures.goUp = []
    this.animationTextures.goUp.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(0, 30, 30, 30)))
    this.animationTextures.goUp.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(30, 30, 30, 30)))
    this.animationTextures.goUp.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(60, 30, 30, 30)))
    this.animationTextures.goUp.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(90, 30, 30, 30)))
    this.animationTextures.goUp.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(120, 30, 30, 30)))
    this.animationTextures.goUp.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(150, 30, 30, 30)))
    this.animationTextures.goUp.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(180, 30, 30, 30)))
    this.animationTextures.goUp.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(210, 30, 30, 30)))

    this.animationTextures.goLeft = []
    this.animationTextures.goLeft.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(240, 0, 30, 30)))
    this.animationTextures.goLeft.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(270, 0, 30, 30)))
    this.animationTextures.goLeft.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(300, 0, 30, 30)))
    this.animationTextures.goLeft.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(330, 0, 30, 30)))
    this.animationTextures.goLeft.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(360, 0, 30, 30)))
    this.animationTextures.goLeft.push(generateTextureFromTileMap(texture, new PIXI.Rectangle(390, 0, 30, 30)))

    this.animation = new PIXI.extras.AnimatedSprite(this.animationTextures.goDown)
    this.animation.anchor.set(0.5, 0.667)
    this.animation.position.set(x, y)
    this.animation.animationSpeed = 0.1

    this.lastDirection = null
    this.coins = 0
    this.health = 0
    this.speed = 1
  }

  getDirection () {
    let keyState = this.keyboardHandler.getKeyState()
    let lastKey = this.keyboardHandler.getLastKey()

    if (keyState[Key.Z] === KeyState.Down && Key.Z === lastKey) return Directions.Up
    if (keyState[Key.Q] === KeyState.Down && Key.Q === lastKey) return Directions.Left
    if (keyState[Key.S] === KeyState.Down && Key.S === lastKey) return Directions.Down
    if (keyState[Key.D] === KeyState.Down && Key.D === lastKey) return Directions.Right

    if (keyState[Key.Z] === KeyState.Down) return Directions.Up
    if (keyState[Key.Q] === KeyState.Down) return Directions.Left
    if (keyState[Key.S] === KeyState.Down) return Directions.Down
    if (keyState[Key.D] === KeyState.Down) return Directions.Right

    return null
  }

  move () {
    let newDirection = this.getDirection()
    console.log(newDirection, this.lastDirection);

    if (newDirection === null) {
      this.animation.gotoAndStop(0)
      this.lastDirection = null
      return
    }

    if (this.lastDirection !== newDirection) {
      this.changeAnimationDir(newDirection)
      this.lastDirection = newDirection
    }

    //let newPos = this.getNextPosition(newDirection)

    //if (this.map.layers.CollisionLayer.isWalkable(newPos.x, newPos.y)) {
      //this.moveCharacterTo(newPos)
    //}
  }

  changeAnimationDir (direction) {
    console.log(direction);
    switch (direction) {
      case Directions.Up:
        this.animation.textures = this.animationTextures.goUp
        this.animation.gotoAndPlay(1)
        break
      case Directions.Down:
        this.animation.textures = this.animationTextures.goDown
        this.animation.gotoAndPlay(1)
        break
      case Directions.Left:
        this.animation.textures = this.animationTextures.goLeft
        this.animation.gotoAndPlay(1)
        break
      case Directions.Right:
        this.animation.textures = this.animationTextures.goRight
        this.animation.gotoAndPlay(1)
        break
    }
  }

  getNextPosition (direction) {
    let pos = this.getActualPosition()
    switch (direction) {
      case Directions.Up:
        pos.y -= this.speed
        break
      case Directions.Down:
        pos.y += this.speed
        break
      case Directions.Left:
        pos.x -= this.speed
        break
      case Directions.Right:
        pos.x += this.speed
        break
    }
    return pos
  }

  moveCharacterTo (pos) {
    this.animation.position.set(pos.x, pos.y)
  }

  getActualPosition () {
    return { x: this.animation.position.x, y: this.animation.position.y }
  }

  getAnimation () {
    return this.animation
  }

  getPosition () {
    return this.animation.position
  }

  addCoins (coins) {
    this.coins += coins
    console.log('Coins: ' + this.coins)
  }

  addHealth (health) {
    this.health += health
    console.log('Health: ' + this.health)
  }
}

function generateTextureFromTileMap (tileMap, rectangle) {
  return new PIXI.Texture(tileMap, {
    x: rectangle.x,
    y: rectangle.y,
    width: rectangle.width,
    height: rectangle.height
  })
}