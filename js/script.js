'use strict';

var app = new PIXI.Application(800, 600, {backgroundColor : 0x489848});
document.body.appendChild(app.view);

var background = new PIXI.Container();

app.stage.addChild(background);

// Create a new texture
var textures = [
    PIXI.Texture.fromImage('img/arbre1.png'),       // 0
    PIXI.Texture.fromImage('img/fond1.png'),        // 1
    PIXI.Texture.fromImage('img/maison1.png'),      // 2
    PIXI.Texture.fromImage('img/cheminhor.png'),    // 3    
    PIXI.Texture.fromImage('img/cheminlat.png'),    // 4
    PIXI.Texture.fromImage('img/chemincote.png'),   // 5
    PIXI.Texture.fromImage('img/chemincote2.png'),  // 6
    PIXI.Texture.fromImage('img/chemin2.png'),      // 7
    PIXI.Texture.fromImage('img/tronc2.png'),       // 8
    PIXI.Texture.fromImage('img/herbe2.png'),       // 9
    PIXI.Texture.fromImage('img/chemincote3.png'),  // 10
    PIXI.Texture.fromImage('img/panneau.png'),  // 11
  
];


var x = 0;
while (x < map.length)
{
    var y = 0;
    while (y < map[x].length)
    {
        var tile = new PIXI.Sprite(textures[map[x][y]]);
        /*if (map[x][y] == 0)
        {
            var tile = new PIXI.Sprite(texture0);
        }
        else if (map[x][y] == 1)
        {
            var tile = new PIXI.Sprite(texture1);
        }
        else if (map[x][y] == 2)
        {
            var tile = new PIXI.Sprite(texture2);
        }*/
        // tile.anchor.set(0.5);
        tile.x = x * 30;
        tile.y = y * 30;
        tile.width = 30;
        tile.height = 30;
        background.addChild(tile);
        y++;
    }
	x++;
}

// Create a 5x5 grid of bunnies
/*for (var i = 0; i < 50; i++) {
    var grass = new PIXI.Sprite(textures[0]);
    grass.anchor.set(0.5);
    grass.x = (i % 5) * 40;
    grass.y = Math.floor(i / 5) * 40;
    background.addChild(grass);
}*/

// Center on the screen
//background.x = (app.screen.width - background.width) / 2;
//background.y = (app.screen.height - background.height) / 2;

app.ticker.add(function(delta) {
});

document.body.addEventListener("keydown", function(e)
{
    /*alert(e.keyCode);*/
    if (e.keyCode == 38)
    {
        background.y += 10;
    }
    else if (e.keyCode == 40)
    {
        background.y -= 10;
    }
    else if  (e.keyCode == 37)
    {
        background.x += 10;
    } 
    else if  (e.keyCode == 39)
    {
        background.x -= 10;
    } 
});