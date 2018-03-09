'use strict';

class KeyboardHandler {
  constructor () {
    this.lastKey = null
    this.keyState = {
      [Key.Z]: KeyState.Up,
      [Key.Q]: KeyState.Up,
      [Key.S]: KeyState.Up,
      [Key.D]: KeyState.Up
    }

    this.initListeners()
  }

  getLastKey () {
    return this.lastKey
  }

  getKeyState () {
    return this.keyState
  }

  initListeners () {
    document.body.addEventListener('keydown', (e) => {
      let state = this.keyState[e.keyCode]
      if (state !== null && state === KeyState.Up) {
        this.keyState[e.keyCode] = KeyState.Down
        this.lastKey = e.keyCode
      }
    })

    document.body.addEventListener('keyup', (e) => {
      let state = this.keyState[e.keyCode]
      if (state !== null && state === KeyState.Down) this.keyState[e.keyCode] = KeyState.Up
    })
  }
}