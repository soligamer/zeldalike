const Key = {
  Z: 90,
  Q: 81,
  S: 83,
  D: 68
}

const Directions = {
	Up : 1,
	Down : 2,
	Left : 3,
	Right : 4
};

const KeyState = {
  Up: 0,
  Down: 1
}


var app = new PIXI.Application(600, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

var container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
var texture = PIXI.Texture.fromImage('img/zelda.png');

// Create a 5x5 grid of bunnies

/*var zelda = new PIXI.extras.TilingSprite(texture,app.width,app.height);
container.addChild(zelda);*/


// Move container to the center
/*container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;*/

// Listen for animate update

var count = 005
var character = new Character(new KeyboardHandler(), texture, 64, 32)



app.stage.addChild(character.getAnimation())


app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    character.move();
});