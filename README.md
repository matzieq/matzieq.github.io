# Sparky

Sparky is a tiny library and asset editor for equally tiny games. In the current version you can edit sprites, tilemaps and sound effects, export them as a data file, and develop games using the (incomplete) library. The software is free and open source, provided under the MIT license, which means you can do pretty much whatever you want with it, provided that you attach to it a copy of the license and copyright notice.

## Roadmap

- <s>Map additional function parameters</s>
- <s>Spr additional function parameters</s>
- <s>Loading data in editor</s>
- <s>Octaves in sound editor</s>
- <s>Downloading project template in the app</s>
- <s>Documentation</s>
- <s>Main website for the project</s>
- <s>Initial pass on a code editor</s>
- <s>Export game as a single html file</s>
- Tutorial
- Sample games
- Some kind of music tracker

## API documentation

### General information

1.  I tried to follow the order of Pico-8 documentation, so that it's easier to compare the two and transition to Pico-8 if you want something more advanced.
2.  In all drawing operations where the color is optional, if you leave it out the operation will use the draw color set by the color function (the default is 0, or the brightest yellowish white).
3.  The line and rectangle operations follow Pico-8's style of taking two sets of coordinates instead of one set plus width and height in order to make code more interchangeable between the two.
4.  The api is very small and mainly concerns graphics, sound and input. If you need math functions, array operations etc. you have the entire considerable power of Javascript to do your bidding.
5.  I've tried to make the lib code as simple and succinct as possible, so there are not too many safeguards. Sometimes you might get unexpected results when leaving out non-optional parameters or messing with types.

### Basics

#### `init(config)`

Creates a Sparky game.

- **`config`** - configuration object used by Sparky to create a game loop. The accepted fields are:
- **`init()`** - function that runs once at the beginning of the game
- **`draw()`** - function that runs every frame before the screen buffer is drawn to the canvas
- **`update(dt)`** - function that runs every frame after the screen buffer is drawn to the canvas. The `dt` parameter is the amount of time (in seconds) that elapsed since the last frame

### Graphics

#### `pget(x, y) -> number, pset(x, y, [c])`

Returns or sets the color `c` of the pixel at coordinates `x,y`. If you don't specify color, the current draw color is used.

#### `sget(x, y) -> number, sset(x, y, [c])`

Returns or sets the color `c` of the pixel at coordinates `x,y` of the spritesheet. If you don't specify color, the current draw color is used.

#### `fget(sprite, flagNumber) -> boolean, fset(sprite, flagNumber, [c])`

Returns or sets the color `c` of the pixel at coordinates `x,y` of the spritesheet. If you don't specify color, the current draw color is used.

#### `print(str, x, y, [c])`

Prints the string `str` to coordinates `x,y` in color `c` (or current draw color if that is not specified). Sparky has no concept of "cursor", therefore you must always provide coordinates to draw text. All characters in Sparky's font are three pixels wide and five pixels tall.

#### `color(c = 0)`

Sets current draw color to `c`.

#### `cls(c = 5)`

Fills the entire screen buffer with color `c`.

#### `camera(x = 0, y = 0)`

Offsets all subsequent drawing operations by `-x`, `-y`.

#### `circ(x, y, r, [c]), circfill(x, y, r, [c])`

Draws a circle (or filled circle) with its center at coordinates `x,y` and radius `r`, in color `c` (or current draw color).

#### `line(x0, y0, x1, y1, [c])`

Draws a line from `x0,y0` to `x1,y1` in color `c` (or current draw color).

#### `rect(x0, y0, x1, y1, [c]), rectfill(x0, y0, x1, y1, [c])`

Draws a rectangle (or filled rectangle) with its top left corner at `x0,y0` and bottom right corner at `x1,y1`, in color `c` (or current draw color).

#### `pal(c0, c1)`

Swaps color `c0` in the current palette with `c1` from original palette. If called with no arguments, resets the palette to the initial state, including transparency data.

#### `palt(col, val)`

Sets the transparency flag of color `col` in the current palette to `val` (a boolean value). If called with no arguments, resets the transparency data to initial state (i.e. color number 5 is transparent).

#### `spr(index, x, y, w = 1, h = 1, flipX = false, flipY = false)`

Draws sprite at `index` to coordinates `x, y`. If `w` and/or `h` are specified, it will draw a region from the spritesheet which is `w` sprites wide and `h` sprites high. The `flipX, flipY` flags will flip the drawn image horizontally or vertically (respectively) when set to `true`.

### Input

#### `btn(key) -> boolean`

Returns the boolean state of button no. `key`. Instead of using numbers, you can pass one of predefined constants provided by Sparky:

- `BTN_LEFT = 0`
- `BTN_UP = 1`
- `BTN_RIGHT = 2`
- `BTN_DOWN = 3`
- `BTN_A = 4`
- `BTN_B = 5`
- `BTN_START = 6`
- `BTN_SELECT = 7`

Directional buttons are mapped to arrow keys, a is mapped to either z or c, b is mapped to x, start is escape and select is tab. If you connect a gamepad, it should also be detected and the button layout should be reasonable.

#### `btnp(key) -> boolean`

Returns the state of button no. `key`, if it has just been pressed. If the button is held down, it will only return true once, and then return false on subsequent frames.

### Audio

#### `sfx(index)`

Plays the sound no. `index`.

### Map

#### `mget(x, y) -> number, mset(x, y, v)`

Returns or sets the sprite value `v` at map coordinates `x,y`.

#### `map(celX = 0, celY = 0, x = 0, y = 0, w = 127, h = 127)`

Draws the map starting from cell coordinates `celX` and `celY`, at screen coordinates `x, y`, with the width and height in cells equal to `w` and `h`. Calling it without any parameters will draw the entire map starting from the top left corner of the screen.

### FAQ

- #### Isn't there a music api?

  I haven't figured out how to make a tracker yet. I'm still very new to the web audio API, and it's pretty scary. That said, it's just Javascript. You can play any sound or music file you like using whatever technique or library you want. I might extend Sparky with the capability to do just that, but I think I'd rather learn how to make a tracker instead.

- #### Why only six colors?

  I like this specific palette. And I also suffer from protanopia, so I like limited sets of colors which I can easily tell from one another.

- #### What about peeks and pokes and other stuff that's in Pico-8 and isn't here?

  This is not a fantasy console. It's just a Javascript library that's fantasy-console-like. There's no underlying machine architecture and no fake chips powering this thing. I wanted a simple way to rapidly create tiny games in Javascript and I liked the Pico-8 API. And this is the result.

- #### It's horrible and I hate it! What can I do?

  Go somewhere else.

- #### It's awesome and I love it! What can I do?

  Make an awesome game, upload it somewhere and tell me about it! You can hit me up on twitter via the link in the footer.

- #### Any future plans?

  Make a standalone editor in electron so that you can use if offline. Get a music tracker running. Figure out how to include a code editor within the app so that you don't even have to go outside. Figure out how to spit out an electron app with the game, so you can export to desktop, as well as the web. This will probably take years, but it's something to shoot for.

[President's homepage](https://matzieq.github.io)
[Source on github](https://github.com/matzieq/Sparky)
[Twitter](https://twitter.com/matzieq)
[Itch](https://matzieq.itch.io)
