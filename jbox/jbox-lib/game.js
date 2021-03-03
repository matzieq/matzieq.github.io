const player = { x: 64, y: 64 };

function init() {
  jb.palt(5, false);
  for (let x = 0; x < 128; x++) {
    for (let y = 0; y < 128; y++) {
      if (jb.mget(x, y) === 1) {
        player.x = x * 8;
        player.y = y * 8;
        jb.mset(x, y, 3);
      }
    }
  }
}

function draw() {
  jb.cls();
  jb.map();
  jb.spr(1, player.x, player.y);
}

function update(dt) {
  const dir = { x: 0, y: 0 };
  if (jb.btnp(jb.BTN_RIGHT)) {
    dir.x = 1;
  }
  if (jb.btnp(jb.BTN_LEFT)) {
    dir.x = -1;
  }

  if (jb.btnp(jb.BTN_UP)) {
    dir.y = -1;
  }

  if (jb.btnp(jb.BTN_DOWN)) {
    dir.y = 1;
  }

  movePlayer(player, dir);
}

function movePlayer(player, dir) {
  if (dir.x === 0 && dir.y === 0) {
    return;
  }
  const newX = player.x + dir.x * 8;
  const newY = player.y + dir.y * 8;
  if (jb.fget(jb.mget(newX / 8, newY / 8), 0)) {
    jb.sfx(0);
  } else {
    player.x = newX;
    player.y = newY;
    jb.sfx(1);
  }
}

// var bufferSize = 4096;
// var brownNoise = (function () {
//   var lastOut = 0.0;
//   var node = actx.createScriptProcessor(bufferSize, 1, 1);
//   node.onaudioprocess = function (e) {
//     var output = e.outputBuffer.getChannelData(0);
//     for (var i = 0; i < bufferSize; i++) {
//       var white = Math.random() * 2 - 1;
//       output[i] = (lastOut + 0.02 * white) / 1.02;
//       lastOut = output[i];
//       output[i] *= 3.5; // (roughly) compensate for gain
//     }
//   };
//   return node;
// })();

// brownNoise.connect(actx.destination);

// // jb.map();
// console.log(data.sprites.slice(64 * 8, 64 * 26));
// document.body.innerHTML = data.sprites.slice(64 * 8, 64 * 26).toString();

jb.init({
  init,
  draw,
  update,
});
