var sparkyString = `/* eslint-disable */

/**
 * Sparky version 0.3.0 by President of Space
 *
 * "private" values and methods are marked with a preceding underscore
 * but it's just JS, so there's nothing I can (or want to) do to stop you
 *
 *
 */

function isSafari() {
  return (
    navigator.vendor &&
    navigator.vendor.indexOf("Apple") > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf("CriOS") == -1 &&
    navigator.userAgent.indexOf("FxiOS") == -1
  );
}

var sparky = sparky || {};

sparky._letters = {
  A: [
    [, 1],
    [1, , 1],
    [1, 1, 1],
    [1, , 1],
    [1, , 1],
  ],
  B: [
    [1, 1],
    [1, , 1],
    [1, 1],
    [1, , 1],
    [1, 1],
  ],
  C: [[, 1, 1], [1], [1], [1], [, 1, 1]],
  D: [
    [1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1],
  ],
  E: [[1, 1, 1], [1], [1, 1], [1], [1, 1, 1]],
  F: [[1, 1, 1], [1], [1, 1], [1], [1]],
  G: [[, 1, 1], [1], [1, , 1], [1, , 1], [, 1, 1]],
  H: [
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
    [1, , 1],
    [1, , 1],
  ],
  I: [
    [1, 1, 1],
    [, 1],
    [, 1],
    [, 1],
    [1, 1, 1],
  ],
  J: [
    [, , 1],
    [, , 1],
    [, , 1],
    [1, , 1],
    [1, 1, 1],
  ],
  K: [
    [1, , 1],
    [1, , 1],
    [1, 1],
    [1, , 1],
    [1, , 1],
  ],
  L: [[1], [1], [1], [1], [1, 1, 1]],
  M: [
    [1, , 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, , 1],
    [1, , 1],
  ],
  N: [
    [1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
  ],
  O: [
    [, 1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1],
  ],
  P: [[1, 1], [1, , 1], [1, 1], [1], [1]],
  Q: [
    [0, 1, 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
    [, 1, 1],
  ],
  R: [
    [1, 1],
    [1, , 1],
    [1, 1],
    [1, , 1],
    [1, , 1],
  ],
  S: [[, 1, 1], [1], [1, 1, 1], [, , 1], [1, 1]],
  T: [
    [1, 1, 1],
    [, 1],
    [, 1],
    [, 1],
    [, 1],
  ],
  U: [
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
  ],
  V: [
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [, 1],
  ],
  W: [
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  X: [
    [1, , 1],
    [1, , 1],
    [, 1],
    [1, , 1],
    [1, , 1],
  ],
  Y: [
    [1, , 1],
    [1, , 1],
    [, 1],
    [, 1],
    [, 1],
  ],
  Z: [[1, 1, 1], [, , 1], [, 1], [1], [1, 1, 1]],
  0: [
    [1, 1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
  ],
  1: [
    [1, 1],
    [, 1],
    [, 1],
    [, 1],
    [1, 1, 1],
  ],
  2: [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ],
  3: [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  4: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  5: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  6: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  7: [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  8: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  9: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  " ": [
    [, ,],
    [, ,],
    [, ,],
    [, ,],
    [, ,],
  ],
  ",": [[, , ,], [, , ,], [, , ,], [, 1, ,], [1]],
  ".": [
    [, , ,],
    [, , ,],
    [, , ,],
    [, , ,],
    [, 1],
  ],
  "!": [[1], [1], [1], [,], [1]],
  "?": [[1, 1], [, , 1], [, 1], [,], [, 1]],
  "(": [
    [, 1],
    [1, ,],
    [1, ,],
    [1, ,],
    [, 1],
  ],
  ")": [
    [, 1],
    [, , 1],
    [, , 1],
    [, , 1],
    [, 1],
  ],
  "[": [
    [1, 1],
    [1, ,],
    [1, ,],
    [1, ,],
    [1, 1],
  ],
  "]": [
    [, 1, 1],
    [, , 1],
    [, , 1],
    [, , 1],
    [, 1, 1],
  ],
  "{": [
    [, 1, 1],
    [, 1, ,],
    [1, 1],
    [, 1, ,],
    [, 1, 1],
  ],
  "}": [
    [1, 1],
    [, 1],
    [, 1, 1],
    [, 1],
    [1, 1],
  ],
  "'": [[1], [1], [,], [,], [,]],
  '"': [
    [1, , 1],
    [1, , 1],
    [, ,],
    [, ,],
    [, ,],
  ],
  "%": [[1, , 1], [, , 1], [, 1], [1], [1, , 1]],
  "&": [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, , 1],
    [1, 1, 1],
  ],
  "-": [
    [, ,],
    [, ,],
    [1, 1, 1],
    [, ,],
    [, ,],
  ],
  "+": [[,], [, 1], [1, 1, 1], [, 1], [,]],
  "*": [
    [1, , 1],
    [, 1],
    [1, 1, 1],
    [, 1],
    [1, , 1],
  ],
  "/": [
    [, , 1],
    [, , 1],
    [, 1],
    [1, ,],
    [1, ,],
  ],
  ":": [
    [, ,],
    [, 1],
    [, ,],
    [, 1],
    [, ,],
  ],
  ";": [
    [, ,],
    [, 1],
    [, ,],
    [, 1],
    [1, ,],
  ],
  _: [
    [, ,],
    [, ,],
    [, ,],
    [, ,],
    [1, 1, 1],
  ],
};

sparky._origPal = [
  [251, 245, 239],
  [242, 211, 171],
  [198, 159, 165],
  [139, 109, 156],
  [73, 77, 126],
  [39, 39, 68],
];

sparky._rgbPal = [...sparky._origPal];

sparky._screenSize = 128;

sparky._transparent = [false, false, false, false, false, true];

sparky._dataSet = [0];

sparky.BTN_LEFT = 0;
sparky.BTN_UP = 1;
sparky.BTN_RIGHT = 2;
sparky.BTN_DOWN = 3;
sparky.BTN_A = 4;
sparky.BTN_B = 5;
sparky.BTN_START = 6;
sparky.BTN_SELECT = 7;

sparky._middleC = 440 * Math.pow(Math.pow(2, 1 / 12), -9);

sparky._cam = { x: 0, y: 0 };

sparky._keys = {
  left: {
    pressed: false,
    justPressed: false,
  },
  up: {
    pressed: false,
    justPressed: false,
  },
  right: {
    pressed: false,
    justPressed: false,
  },
  down: {
    pressed: false,
    justPressed: false,
  },
  a: {
    pressed: false,
    justPressed: false,
  },
  b: {
    pressed: false,
    justPressed: false,
  },
  start: {
    pressed: false,
    justPressed: false,
  },
  select: {
    pressed: false,
    justPressed: false,
  },
};

sparky._drawColor = 0;

sparky._screenBuffer = null;

sparky._gamepad = null;

sparky._getClearScreenData = function (col = 5) {
  const emptyScreenData = new Uint8ClampedArray(128 * 128 * 4);

  for (let i = 0; i < 128 * 128 * 4; i += 4) {
    const [r, g, b] = this._rgbPal[col];
    emptyScreenData[i] = r;
    emptyScreenData[i + 1] = g;
    emptyScreenData[i + 2] = b;
    emptyScreenData[i + 3] = 255;
  }

  return emptyScreenData;
};

sparky.init = function (config) {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  const scale = 1;
  this._areMobileControlsActive = false;
  this._sparkycanv = document.createElement("canvas");
  this._sparkycanv.width = this._screenSize * scale;
  this._sparkycanv.height = this._screenSize * scale;
  this._sparkycanv.className = "sparky-canvas";
  this._sparkyctx = this._sparkycanv.getContext("2d");
  this._sparkyctx.scale(scale, scale);

  this._actx = new AudioContext();

  this._sparkyctx.imageSmoothingEnabled = false;

  const el = document.querySelector(
    config && config.element ? "." + config.element : ".board"
  );
  const isEmbedded = !!el;

  this._isEmbedded = isEmbedded;

  if (el) {
    el.innerHTML = "";
    el.appendChild(this._sparkycanv);
    this._parentElem = el;
  } else {
    document.body.appendChild(this._sparkycanv);
    this._parentElem = document.body;
  }
  this._draw = config && config.draw ? config.draw : function () {};
  this._update = config && config.update ? config.update : function () {};
  const style = document.createElement("style");

  const controlStyles = \`
  
  .mobile-controls-wrapper {
    display: flex;
    justify-content: space-between;

  }

  .control-pad, .action-buttons, .control-buttons {
    position: relative;

    margin: 96px 48px;
  }

  .control {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #8b6d9c;
    outline: none;
    border: none;
    color: #f2d3ab;
    font-family: sans-serif;
  }

  .control:active {
    background: #c69fa5;
  }

  .control-pad .control {
    border-radius: 8px;
  }

  .action-buttons .control {
    border-radius: 50%;
  }

  .control.control-left {
    left: -48px;
    top: 0;
  }
  .control.control-right {
    left: 48px;
    top: 0;
  }
  .control.control-up {
    left: 0;
    top: -48px;
  }
  .control.control-down {
    left: 0;
    top: 48px;
  }
  .control.control-a {
    left: 0;
    top: 48px;
  }
  .control.control-b {
    left: -48px;
    top: 0;
  }
  .control.control-select {
    top: -28px;
    left: 0;
  }
  .control.control-start {
    top: 28px;
    left: 0;
  }
  \`;

  const canvasStyles = \`
  display: block;
  margin: 0 auto;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  \`;

  style.textContent = isEmbedded
    ? \`
    .sparky-canvas {
      \${canvasStyles};
    }
    \${controlStyles}
  \`
    : \`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    body {
      background-color: #000;
    }

    canvas {
      \${canvasStyles}
    }
    \${controlStyles}
  \`;

  document.head.appendChild(style);

  this._fitToScreen();
  this._screenBuffer = new ImageData(
    new Uint8ClampedArray(128 * 128 * 4),
    128,
    128
  );

  window.addEventListener("resize", () => this._fitToScreen());
  window.addEventListener("keydown", (e) => this._onKeyPressed(e));
  window.addEventListener("keyup", (e) => sparky._onKeyReleased(e));

  window.requestAnimationFrame((t) => this._step(t));

  if (config && typeof config.init === "function") {
    try {
      config.init();
    } catch (err) {
      console.error(err);
    }
  }
};

sparky.getMovingYouInfernalMachine = sparky.init;
sparky._terminate = function () {
  window.removeEventListener("resize", sparky._fitToScreen);
  window.removeEventListener("keydown", sparky._onKeyPressed);
  window.addEventListener("keyup", sparky._onKeyReleased);
};

sparky._fitToScreen = function () {
  if (this._isEmbedded) {
    if (window.innerWidth > window.innerHeight) {
      this._sparkycanv.style.height = "50vh";
      this._sparkycanv.style.width = "auto";
    } else {
      this._sparkycanv.style.width = "100%";
      this._sparkycanv.style.height = "auto";
    }
  } else {
    if (window.innerWidth > window.innerHeight) {
      this._sparkycanv.style.height = "100vh";
      this._sparkycanv.style.width = "auto";
    } else {
      this._sparkycanv.style.width = "100vw";
      this._sparkycanv.style.height = "auto";
    }
  }

  if (window.innerWidth < 769) {
    // this._areMobileControlsActive = true;
    this._initMobileControls();
  }
};

sparky._initMobileControls = function () {
  if (!this._areMobileControlsActive) {
    this._areMobileControlsActive = true;
    const mobileControlsWrapper = document.createElement("div");
    mobileControlsWrapper.className = "mobile-controls-wrapper";
    mobileControlsWrapper.innerHTML =
      '<div class="control-pad">  <button class="control control-left">&larr;</button>  <button class="control control-right">&rarr;</button>  <button class="control control-up">&uarr;</button>  <button class="control control-down">&darr;</button></div><div class="control-buttons">  <button class="control control-select">select</button>  <button class="control control-start">start</button></div><div class="action-buttons">  <button class="control control-a">A</button>  <button class="control control-b">B</button></div>    ';
    this._parentElem.appendChild(mobileControlsWrapper);
  }

  const mobileControls = document.querySelectorAll(".control");
  this._mobileControls = mobileControls;

  mobileControls.forEach((ctrl) => {
    ctrl.addEventListener("touchstart", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.className.includes("left")) {
        this._keys.left.pressed = true;
        this._keys.left.justPressed = true;
      }
      if (e.target.className.includes("right")) {
        this._keys.right.pressed = true;
        this._keys.right.justPressed = true;
      }
      if (e.target.className.includes("up")) {
        this._keys.up.pressed = true;
        this._keys.up.justPressed = true;
      }
      if (e.target.className.includes("down")) {
        this._keys.down.pressed = true;
        this._keys.down.justPressed = true;
      }
      if (e.target.className.includes("select")) {
        this._keys.select.pressed = true;
        this._keys.select.justPressed = true;
      }
      if (e.target.className.includes("start")) {
        this._keys.start.pressed = true;
        this._keys.start.justPressed = true;
      }
      if (e.target.className.includes("control-a")) {
        this._keys.a.pressed = true;
        this._keys.a.justPressed = true;
      }
      if (e.target.className.includes("control-b")) {
        this._keys.b.pressed = true;
        this._keys.b.justPressed = true;
      }
    });
    ctrl.addEventListener("touchend", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.className.includes("left")) {
        this._keys.left.pressed = false;
      }
      if (e.target.className.includes("right")) {
        this._keys.right.pressed = false;
      }
      if (e.target.className.includes("up")) {
        this._keys.up.pressed = false;
      }
      if (e.target.className.includes("down")) {
        this._keys.down.pressed = false;
      }
      if (e.target.className.includes("select")) {
        this._keys.select.pressed = false;
      }
      if (e.target.className.includes("start")) {
        this._keys.start.pressed = false;
      }
      if (e.target.className.includes("a")) {
        this._keys.a.pressed = false;
      }
      if (e.target.className.includes("b")) {
        this._keys.b.pressed = false;
      }
    });
  });
};

sparky._step = function (timestamp) {
  if (!this._lastFrame) {
    this._lastFrame = 0;
  }
  const _dt = timestamp - this._lastFrame;

  this._frameRate = 1000 / _dt;

  this._lastFrame = timestamp;
  this._readGamepadState();
  try {
    this._update(_dt / 1000);
    this._draw();
    this._sparkyctx.putImageData(this._screenBuffer, 0, 0);
    this._frameRequestId = window.requestAnimationFrame((t) => this._step(t));
  } catch (err) {
    console.error(err);
    window.cancelAnimationFrame(this._frameRequestId);
  }
};

sparky._readGamepadState = function () {
  const gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
    ? navigator.webkitGetGamepads
    : [];

  if (!gamepads || !gamepads[0]) {
    return;
  }

  const gp = gamepads[0];

  const up = 12;
  const down = 13;
  const left = 14;
  const right = 15;
  const a = 0;
  const b = 2;
  const sel = 8;
  const start = 9;
  const horiz = 0;
  const vert = 1;

  const isUp = gp.buttons[up].pressed || gp.axes[vert] < -0.5;
  const isDown = gp.buttons[down].pressed || gp.axes[vert] > 0.5;
  const isLeft = gp.buttons[left].pressed || gp.axes[horiz] < -0.5;
  const isRight = gp.buttons[right].pressed || gp.axes[horiz] > 0.5;

  const isA = gp.buttons[a].pressed;
  const isB = gp.buttons[b].pressed;
  const isSel = gp.buttons[sel].pressed;
  const isStart = gp.buttons[start].pressed;

  if (isUp) {
    if (!this._keys.up.pressed) {
      this._keys.up.justPressed = true;
    }
  }

  if (isDown) {
    if (!this._keys.down.pressed) {
      this._keys.down.justPressed = true;
    }
  }
  if (isLeft) {
    if (!this._keys.left.pressed) {
      this._keys.left.justPressed = true;
    }
  }
  if (isRight) {
    if (!this._keys.right.pressed) {
      this._keys.right.justPressed = true;
    }
  }
  if (isA) {
    if (!this._keys.a.pressed) {
      this._keys.a.justPressed = true;
    }
  }

  if (isB) {
    if (!this._keys.b.pressed) {
      this._keys.b.justPressed = true;
    }
  }
  if (isSel) {
    if (!this._keys.select.pressed) {
      this._keys.select.justPressed = true;
    }
  }
  if (isStart) {
    if (!this._keys.start.pressed) {
      this._keys.start.justPressed = true;
    }
  }

  this._keys.up.pressed = isUp;
  this._keys.down.pressed = isDown;
  this._keys.left.pressed = isLeft;
  this._keys.right.pressed = isRight;
  this._keys.a.pressed = isA;
  this._keys.b.pressed = isB;
  this._keys.select.pressed = isSel;
  this._keys.start.pressed = isStart;
};

sparky.cls = function (col) {
  const emptyScreen = this._getClearScreenData(col);
  for (let i = 0; i < emptyScreen.length; i++) {
    this._screenBuffer.data[i] = emptyScreen[i];
  }
};

sparky.camera = function (x = 0, y = 0) {
  this._cam = { x, y };
};

sparky.spr = function (
  spriteIndex,
  x,
  y,
  w = 1,
  h = 1,
  flipX = false,
  flipY = false
) {
  if (w < 0 || h < 0) {
    return;
  }

  for (let height = 0; height < h; height++) {
    for (let width = 0; width < w; width++) {
      let clipX = 7;
      let clipY = 7;

      if (h - height <= 1) {
        clipY = Math.round(7 * (h - height));
      }
      if (w - width <= 1) {
        clipX = Math.round(7 * (w - width));
      }

      this._spr(
        spriteIndex + width + height * 8,
        x + width * 8,
        y + height * 8,
        flipX,
        flipY,
        clipX,
        clipY
      );
    }
  }
};

sparky._spr = function (
  spriteIndex,
  _x,
  _y,
  flipX = false,
  flipY = false,
  clipX = 7,
  clipY = 7
) {
  const sprite = this._data[this._dataSet].sprites.slice(
    spriteIndex * 64,
    (spriteIndex + 1) * 64
  );

  const { x, y } = this._adjustCoords(_x, _y);

  // Do not render anything off screen
  if (x > -8 && x < this._screenSize && y > -8 && y < this._screenSize) {
    sprite.forEach((cell, cellIndex) => {
      let pixelX = cellIndex % 8;
      let pixelY = Math.floor(cellIndex / 8);

      if (pixelX > clipX || pixelY > clipY) {
        return;
      }

      if (flipX) {
        pixelX = 7 - pixelX;
      }

      if (flipY) {
        pixelY = 7 - pixelY;
      }

      if (!this._transparent[cell]) {
        // const [r, g, b] = this._rgbPal[cell];
        this._updatePixel(x + pixelX, y + pixelY, ...this._rgbPal[cell]);
      }
    });
  }
};

sparky._updatePixel = function (x, y, r, g, b) {
  if (this._isOnScreen(x, y)) {
    const i = (y * 128 + x) * 4;

    if (i < this._screenBuffer.data.length - 3) {
      this._screenBuffer.data[i] = r;
      this._screenBuffer.data[i + 1] = g;
      this._screenBuffer.data[i + 2] = b;
      this._screenBuffer.data[i + 3] = 255;
    }
  }
};

sparky.color = function (col = 0) {
  if (col >= 0 && col < this._rgbPal.length) {
    this._drawColor = col;
  }
};

// Based on pixel font by PaulBGD
sparky.print = function (_str, _x, _y, col = this._drawColor) {
  const needed = [];

  const str =
    typeof _str === "string"
      ? _str.toUpperCase()
      : _str.toString().toUpperCase();

  const { x, y } = this._adjustCoords(_x, _y);

  for (let i = 0; i < str.length; i++) {
    const letter = this._letters[str.charAt(i)];
    if (letter) {
      needed.push(letter);
    }
  }

  let currX = 0;
  needed.forEach((letter) => {
    let currY = 0;
    let addX = 0;
    letter.forEach((row) => {
      row.forEach((pixel, stringX) => {
        if (pixel) {
          this._updatePixel(
            currX + x + stringX,
            currY + y,
            ...this._rgbPal[col]
          );
        }
      });
      addX = Math.max(addX, row.length);
      currY += 1;
    });
    currX += 1 + addX;
  });
};

sparky._circ = function (_x, _y, r, col = this._drawColor, fill = false) {
  const { x, y } = this._adjustCoords(_x, _y);

  for (let pY = -r; pY <= r; pY++) {
    for (let pX = -r; pX <= r; pX++) {
      const cX = pX + x;
      const cY = pY + y;

      if (fill) {
        if (pX * pX + pY * pY >= r * r) {
          continue;
        }
      } else {
        if (Math.abs(pX * pX + pY * pY - r * r) > r) {
          continue;
        }
      }

      this._updatePixel(cX, cY, ...this._rgbPal[col]);
    }
  }
};

sparky.circ = function (x, y, r, col) {
  sparky._circ(x, y, r, col);
};

sparky.circfill = function (x, y, r, col) {
  sparky._circ(x, y, r, col, true);
};

sparky.rect = function (x0, y0, x1, y1, col) {
  this._rect(x0, y0, x1, y1, col, false);
};
sparky.rectfill = function (x0, y0, x1, y1, col) {
  this._rect(x0, y0, x1, y1, col, true);
};

sparky._adjustCoords = function (x, y) {
  return {
    x: Math.round(x - this._cam.x),
    y: Math.round(y - this._cam.y),
  };
};

sparky._rect = function (
  _x0,
  _y0,
  _x1,
  _y1,
  col = this._drawColor,
  fill = false
) {
  //
  if (_x0 > _x1) {
    [_x0, _x1] = [_x1, _x0];
  }

  if (_y0 > _y1) {
    [_y0, _y1] = [_y1, _y0];
  }

  const { x: x0, y: y0 } = this._adjustCoords(_x0, _y0);
  const { x: x1, y: y1 } = this._adjustCoords(_x1, _y1);

  const [r, g, b] = this._rgbPal[col];

  if (fill) {
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        this._updatePixel(x, y, r, g, b);
      }
    }
  } else {
    for (let y = y0; y <= y1; y++) {
      this._updatePixel(x0, y, r, g, b);
      this._updatePixel(x1, y, r, g, b);
    }

    for (let x = x0; x <= x1; x++) {
      this._updatePixel(x, y0, r, g, b);
      this._updatePixel(x, y1, r, g, b);
    }
  }
};

sparky._isOnScreen = function (x, y) {
  return x >= 0 && x < this._screenSize && y >= 0 && y < this._screenSize;
};

sparky.map = function (celX = 0, celY = 0, x = 0, y = 0, w = 127, h = 127) {
  // const { x, y } = this._adjustCoords(_x, _y);

  for (let i = 0; i < 64; i++) {
    const screenX = i % 8;
    const screenY = Math.floor(i / 8);

    const screenData = this._data[this._dataSet].map.slice(
      i * 256,
      (i + 1) * 256
    );

    screenData.forEach((cell, cellIndex) => {
      const cellMapX = cellIndex % 16;
      const cellMapY = Math.floor(cellIndex / 16);

      if (
        cellMapX + screenX * 16 < celX ||
        cellMapY + screenY * 16 < celY ||
        cellMapX + screenX * 16 > w - celY ||
        cellMapY + screenY * 16 > h - celY
      ) {
        return;
      }

      const spriteX = x + screenX * 128 + cellMapX * 8 - celX * 8;
      const spriteY = y + screenY * 128 + cellMapY * 8 - celY * 8;

      if (
        spriteX - this._cam.x < -8 ||
        spriteX - this._cam.x > 128 ||
        spriteY - this._cam.y < -8 ||
        spriteY - this._cam.y > 128
      ) {
        return;
      }

      this.spr(cell, spriteX, spriteY);
    });
  }
};

sparky.mget = function (_x, _y) {
  if (_x < 0 || _y < 0 || _x > 128 || _y > 128) {
    return "";
  }

  const screenX = Math.floor(_x / 16);
  const screenY = Math.floor(_y / 16);
  const cellX = Math.floor(_x % 16);
  const cellY = Math.floor(_y % 16);

  const screenNumber = screenY * 8 + screenX;
  const cellNumber = cellY * 16 + cellX;

  const mapTile =
    this._data[this._dataSet].map[screenNumber * 256 + cellNumber];

  return mapTile != undefined ? mapTile : "";
};

sparky.mset = function (_x, _y, sprite) {
  if (_x < 0 || _y < 0 || _x > 128 || _y > 128 || sprite < 0 || sprite > 63) {
    return;
  }

  const screenX = Math.floor(_x / 16);
  const screenY = Math.floor(_y / 16);
  const cellX = Math.floor(_x % 16);
  const cellY = Math.floor(_y % 16);

  const screenNumber = screenY * 8 + screenX;
  const cellNumber = cellY * 16 + cellX;

  this._data[this._dataSet].map[screenNumber * 256 + cellNumber] = sprite;
};

sparky.sget = function (_x, _y) {
  if (_x < 0 || _y < 0 || _x > 63 || _y > 63) {
    return "";
  }

  const screenX = Math.floor(_x / 8);
  const screenY = Math.floor(_y / 8);
  const cellX = Math.floor(_x % 8);
  const cellY = Math.floor(_y % 8);

  const spriteNumber = screenY * 8 + screenX;
  const pixelNumber = cellY * 8 + cellX;

  const col =
    this._data[this._dataSet].sprites[spriteNumber * 64 + pixelNumber];

  return col != undefined ? col : "";
};

sparky.sset = function (_x, _y, col = this._drawColor) {
  if (_x < 0 || _y < 0 || _x > 63 || _y > 63 || col < 0 || col > 5) {
    return;
  }

  const screenX = Math.floor(_x / 8);
  const screenY = Math.floor(_y / 8);
  const cellX = Math.floor(_x % 8);
  const cellY = Math.floor(_y % 8);

  const spriteNumber = screenY * 8 + screenX;
  const pixelNumber = cellY * 8 + cellX;

  this._data[this._dataSet].sprites[spriteNumber * 64 + pixelNumber] = col;
};

sparky.fget = function (sprite, flag) {
  if (
    sprite < 0 ||
    sprite > 63 ||
    (flag != null && flag < 0) ||
    (flag != null && flag > 7)
  ) {
    return null;
  }
  if (flag == undefined) {
    return this._data[this._dataSet].spriteFlags[sprite];
  } else {
    return !!(this._data[this._dataSet].spriteFlags[sprite] & (1 << flag));
  }
};

sparky.fset = function (sprite, flagOrBitfield, value) {
  if (
    sprite < 0 ||
    sprite > 63 ||
    (value != null && (flagOrBitfield < 0 || flagOrBitfield > 7)) ||
    (value == null && (flagOrBitfield < 0 || flagOrBitfield > 255))
  ) {
    return;
  }

  if (value == null) {
    this._data[this._dataSet].spriteFlags[sprite] = flagOrBitfield;
  } else {
    const mask = 1 << flagOrBitfield;

    if (value) {
      this._data[this._dataSet].spriteFlags[sprite] |= mask;
    } else {
      this._data[this._dataSet].spriteFlags[sprite] &= ~mask;
    }
  }
};

sparky.pget = function (x, y) {
  if (this._isOnScreen(x, y)) {
    const pIndex = (y * 128 + x) * 4;
    const [r, g, b] = this._screenBuffer.data.slice(pIndex, pIndex + 4);

    return this._rgbPal.findIndex(
      (col) => col[0] === r && col[1] === g && col[2] === b
    );
  } else {
    return "";
  }
};

sparky.pset = function (x, y, col = this._drawColor) {
  if (col >= 0 && col <= 5) {
    this._updatePixel(x, y, ...this._rgbPal[col]);
  }
};

sparky._resetKeys = function () {
  for (key in this._keys) {
    this._keys[key].justPressed = false;
  }
};

sparky._onKeyPressed = function (e) {
  e.stopPropagation();
  console.log({ e });
  this._actx.resume();
  switch (e.key.toLowerCase()) {
    case "arrowup":
      this._keys.up.pressed = true;
      this._keys.up.justPressed = true;
      break;
    case "arrowdown":
      this._keys.down.pressed = true;
      this._keys.down.justPressed = true;
      break;
    case "arrowleft":
      this._keys.left.pressed = true;
      this._keys.left.justPressed = true;
      break;
    case "arrowright":
      this._keys.right.pressed = true;
      this._keys.right.justPressed = true;
      break;
    case "z":
      this._keys.a.pressed = true;
      this._keys.a.justPressed = true;
      break;
    case "c":
      this._keys.a.pressed = true;
      this._keys.a.justPressed = true;
      break;
    case "x":
      this._keys.b.pressed = true;
      this._keys.b.justPressed = true;
      break;
    case "escape":
      this._keys.start.pressed = true;
      this._keys.start.justPressed = true;
      break;
    case "tab":
      this._keys.select.pressed = true;
      this._keys.select.justPressed = true;
      break;
    default:
      break;
  }
};

sparky._onKeyReleased = function (e) {
  e.stopPropagation();
  switch (e.key) {
    case "ArrowUp":
      this._keys.up.pressed = false;
      break;
    case "ArrowDown":
      this._keys.down.pressed = false;
      break;
    case "ArrowLeft":
      this._keys.left.pressed = false;
      break;
    case "ArrowRight":
      this._keys.right.pressed = false;
      break;
    case "z":
      this._keys.a.pressed = false;
      break;
    case "c":
      this._keys.a.pressed = false;
      break;
    case "x":
      this._keys.b.pressed = false;
      break;
    case "Escape":
      this._keys.start.pressed = false;
      break;
    case "Tab":
      this._keys.select.pressed = false;
      break;
    default:
      break;
  }
};

sparky.btn = function (key) {
  switch (key) {
    case 0:
      return this._keys.left.pressed;
    case 1:
      return this._keys.up.pressed;
    case 2:
      return this._keys.right.pressed;
    case 3:
      return this._keys.down.pressed;
    case 4:
      return this._keys.a.pressed;
    case 5:
      return this._keys.b.pressed;
    case 6:
      return this._keys.start.pressed;
    case 7:
      return this._keys.select.pressed;
  }
};

sparky.btnp = function (key) {
  switch (key) {
    case 0:
      if (this._keys.left.justPressed) {
        this._keys.left.justPressed = false;
        return true;
      } else {
        return false;
      }
    case 1:
      if (this._keys.up.justPressed) {
        this._keys.up.justPressed = false;
        return true;
      } else {
        return false;
      }
    case 2:
      if (this._keys.right.justPressed) {
        this._keys.right.justPressed = false;
        return true;
      } else {
        return false;
      }
    case 3:
      if (this._keys.down.justPressed) {
        this._keys.down.justPressed = false;
        return true;
      } else {
        return false;
      }
    case 4:
      if (this._keys.a.justPressed) {
        this._keys.a.justPressed = false;
        return true;
      } else {
        return false;
      }
    case 5:
      if (this._keys.b.justPressed) {
        this._keys.b.justPressed = false;
        return true;
      } else {
        return false;
      }
    case 6:
      if (this._keys.start.justPressed) {
        this._keys.start.justPressed = false;
        return true;
      } else {
        return false;
      }
    case 7:
      if (this._keys.select.justPressed) {
        this._keys.select.justPressed = false;
        return true;
      } else {
        return false;
      }
  }
};

sparky._getFrequency = function (dist, octaveDiff = 0) {
  freq = this._middleC * Math.pow(Math.pow(2, 1 / 12), dist);
  return freq * Math.pow(2, octaveDiff);
};

sparky._soundEffect = function (
  actx, // audio context
  frequency, //The sound's fequency pitch in Hertz
  type, //waveform type: "sine", "triangle", "square", "sawtooth"
  volumeValue, //The sound's maximum volume
  wait, //The time, in seconds, to wait before playing the sound
  timeout, //A number, in seconds, which is the maximum duration for sound effects
  fx, // what effect to apply: "fade-in", "fade-out", "vibrato", "slide", "noise"
  nextFreq // if there is any sound after this, for slide purposes
) {
  //Set the default values
  if (frequency === undefined) frequency = 200;
  if (type === undefined) type = "sine";
  if (volumeValue === undefined) volumeValue = 1;
  if (wait === undefined) wait = 0;
  if (timeout === undefined) timeout = 2;

  const attack = timeout / 4;
  const decay = timeout;

  const oscillator = actx.createOscillator();
  const volume = actx.createGain();

  oscillator.connect(volume);
  volume.connect(actx.destination);

  oscillator.type = type;

  oscillator.frequency.value = frequency;
  volume.gain.value = volumeValue;

  if (!isSafari()) {
    // mitigate irritating pop
    cutOff(volume);
  }

  //Apply effects
  switch (fx) {
    case "fade-in":
      fadeIn(volume);
      break;
    case "fade-out":
      fadeOut(volume);
      break;
    case "vibrato":
      vibrato(oscillator.frequency);
      break;

    case "slide":
      slide(oscillator.frequency);
      break;
    case "noise":
      noise(oscillator.frequency);
    default:
      break;
  }

  play(oscillator);

  function fadeIn(volumeNode) {
    volumeNode.gain.value = 0;

    volumeNode.gain.linearRampToValueAtTime(0, actx.currentTime + wait);
    volumeNode.gain.linearRampToValueAtTime(
      volumeValue,
      actx.currentTime + wait + attack
    );
  }

  function fadeOut(volumeNode) {
    volumeNode.gain.linearRampToValueAtTime(
      volumeValue,
      actx.currentTime + wait
    );
    volumeNode.gain.linearRampToValueAtTime(0, actx.currentTime + wait + decay);
  }

  function cutOff(volumeNode) {
    if (fx !== "fade-in") {
      volumeNode.gain.value = 0;

      volumeNode.gain.linearRampToValueAtTime(0, actx.currentTime + wait);
      volumeNode.gain.linearRampToValueAtTime(
        volumeValue,
        actx.currentTime + wait + 0.01
      );
    }

    if (fx !== "fade-out") {
      volumeNode.gain.linearRampToValueAtTime(
        volumeValue,
        actx.currentTime + wait + timeout - 0.01
      );
      volumeNode.gain.linearRampToValueAtTime(
        0,
        actx.currentTime + wait + timeout - 0.001
      );
    }
  }

  function vibrato(frequencyNode) {
    const waveTable = [];
    for (let i = 0; i < timeout; i += 0.01) {
      waveTable.push(frequency + Math.sin(i * 40) * (frequency / 40));
    }

    frequencyNode.setValueCurveAtTime(
      new Float32Array(waveTable),
      actx.currentTime + wait,
      timeout
    );
  }

  function slide(frequencyNode) {
    if (!nextFreq) {
      return;
    }
    const waveTable = [frequency, nextFreq];

    frequencyNode.setValueCurveAtTime(
      new Float32Array(waveTable),
      actx.currentTime + wait,
      timeout
    );
  }

  function noise(frequencyNode) {
    var waveTable = [];
    var curfreq = 5 * frequency;
    for (var i = 0; i < timeout; i += 0.001) {
      waveTable.push(Math.random() * curfreq - curfreq / 3);
    }

    frequencyNode.setValueCurveAtTime(
      waveTable,
      actx.currentTime + wait,
      timeout
    );
  }

  function play(node) {
    node.start(actx.currentTime + wait);
    node.stop(actx.currentTime + wait + timeout);
  }
};

sparky.sfx = function (soundIndex) {
  const sound = this._data[this._dataSet].sfx[soundIndex];
  const interval = sound.tempo / 64;
  for (let i = 0; i < sound.samples.length; i++) {
    const sample = sound.samples[i];
    let repeat = 1;

    if (!["fade-in", "fade-out"].includes(sample.fx)) {
      for (let j = i + 1; j < sound.samples.length; j++) {
        const nextSample = sound.samples[j];
        if (
          !nextSample ||
          nextSample.dist !== sample.dist ||
          nextSample.type !== sample.type ||
          nextSample.volume !== sample.volume ||
          nextSample.fx !== sample.fx
        ) {
          break;
        }
        repeat++;
      }
    }
    this._soundEffect(
      this._actx,
      this._getFrequency(sample.dist, sample.oct),
      sample.type,
      sample.volume / 40,
      interval * i,
      interval * repeat,
      sample.fx,
      sound.samples[i + 1]
        ? this._getFrequency(
            sound.samples[i + 1].dist,
            sound.samples[i + 1].oct
          )
        : null
    );
    i += repeat - 1;
  }
};

sparky._chainedSfx = function (sfxList) {
  let sounds = [];

  for (const soundIndex in sfxList) {
    sounds.push(this._data[this._dataSet].sfx[soundIndex]);
  }
  const interval = sounds[0].tempo / 64;

  let samples = [];

  for (const sound of sounds) {
    samples = [...samples, ...sound.samples];
  }

  for (let i = 0; i < samples.length; i++) {
    const sample = samples[i];
    let repeat = 1;

    if (!["fade-in", "fade-out"].includes(sample.fx)) {
      for (let j = i + 1; j < samples.length; j++) {
        const nextSample = samples[j];
        if (
          !nextSample ||
          nextSample.dist !== sample.dist ||
          nextSample.type !== sample.type ||
          nextSample.volume !== sample.volume ||
          nextSample.fx !== sample.fx
        ) {
          break;
        }
        repeat++;
      }
    }
    this._soundEffect(
      this._actx,
      this._getFrequency(sample.dist, sample.oct),
      sample.type,
      sample.volume / 40,
      interval * i,
      interval * repeat,
      sample.fx,
      samples[i + 1]
        ? this._getFrequency(
            sound.samples[i + 1].dist,
            sound.samples[i + 1].oct
          )
        : null
    );
    i += repeat - 1;
  }
};

sparky._createImageData = function () {
  this._images = [];

  for (let spr = 0; spr < 64; spr++) {
    const sprite = this._data[this._dataSet].sprites.slice(
      spr * 64,
      (spr + 1) * 64
    );

    const imgArray = sprite
      .map((pixel) => {
        const alpha = this._transparent[pixel] ? 0 : 255;
        const rgbPixel = [...this._rgbPal[pixel], alpha];

        return rgbPixel;
      })
      .flat();

    const img = new ImageData(new Uint8ClampedArray(imgArray), 8, 8);
    this._images.push(img);
  }
};

sparky.palt = function (col, transp) {
  if (col == null && transp == null) {
    this._transparent = [false, false, false, false, false, true];
    return;
  }

  if (col >= 0 && col < this._origPal.length) {
    this._transparent[col] = transp;
  }
};

sparky.pal = function (col1, col2) {
  if (col2 == null) {
    if (col1 == null) {
      this._rgbPal = [...this._origPal];
      this._transparent = [false, false, false, false, false, true];
    }
    return;
  }

  this._rgbPal[col1] = this._origPal[col2];
};

sparky.__switchDataset = function (newData) {
  if (newData > 0 && newData < this._data.length) {
    this._dataSet = newData;
  }
};

sparky.line = function (_x0, _y0, _x1, _y1, col = this._drawColor) {
  let { x: x0, y: y0 } = this._adjustCoords(_x0, _y0);
  let { x: x1, y: y1 } = this._adjustCoords(_x1, _y1);
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    this._updatePixel(x0, y0, ...this._rgbPal[col]);

    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
};

`;

function getDownloadHtml(gameTitle, dataString, gameString, libString) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${gameTitle}</title>
    </head>
    <body>
      <script>${libString}</script>
      <script>${dataString}</script>
      <script>${gameString}</script>
    </body>
  </html>
`;
}
