# A small! engine for 2D Canvas html5 game
## Usage
To install this. Add the .js file to the projeckt, and in your main game object create a instans of 
```
new Engine(can, ctx)
```
where you place the canvas and the canvas's 2d context.
Eks.
```
var can = document.getElementById('game');
var	ctx = can.getContext('2d');
var engine = new Engine(can, ctx);
```

then call the init to place you game object.

```
var gameObjeckt = new GameObjeckt();
engine.init(gameObjeckt);
```

The game object must have the following functions
 * update
 * render
then you are all set.

## Properties

### can

have the canvas element.

### ctx

Have the canvas's `CanvasRenderingContext2D`, where it all shoud be drawed on.

### fps

have fps it is running in. Default `1000 / 30` 30 fps, `1000 = 1sec`

### delta

the delta have how meny times the frames have been renderet

### debug

Set if you are debuging or not. Default `false`

## Methods 

### init

Must be runed whit the game object. The object must have the following functions
 * update
 * render

### start

this will start the game loop. if not runing

### stop

will stop the current game loop.

### consoleError

A methode to right console logs, if you are in debug

## example

in the example folder is a small example of using the Engine