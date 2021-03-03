// import { palette } from "./data";
// import { middleC } from "./constants";

function updateSprite(spriteIndex, ctx, state) {
  const sprite = state.sprites[spriteIndex];

  const spriteRow = Math.floor(spriteIndex / 8);
  const spriteCol = spriteIndex % 8;
  drawSprite(sprite, ctx, spriteCol * 8, spriteRow * 8);
}

function drawSprite(sprite, ctx, x, y) {
  sprite.forEach((row, rowIndex) =>
    row.forEach((cell, cellIndex) => {
      ctx.fillStyle = palette[cell];
      ctx.fillRect(x + cellIndex, y + rowIndex, 1, 1);
    })
  );
}

function getMousePos(e, canv) {
  const rect = canv.getBoundingClientRect();

  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function download(filename, text) {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function getFrequency(dist, octaveDiff = 0) {
  const freq = middleC * Math.pow(Math.pow(2, 1 / 12), dist);
  return freq * Math.pow(2, octaveDiff);
}

function soundEffect(
  actx, // audio context
  frequency, //The sound's fequency pitch in Hertz
  type, //waveform type: "sine", "triangle", "square", "sawtooth"
  volumeValue, //The sound's maximum volume
  wait, //The time, in seconds, to wait before playing the sound
  timeout, //A number, in seconds, which is the maximum duration for sound effects
  fx, // what effect to apply: "fade-in", "fade-out", "vibrato", "slide"
  nextFreq // if there is any sound after this, for slide purposes
) {
  //Set the default values
  if (frequency === undefined) frequency = 200;
  if (type === undefined) type = "sine";
  if (volumeValue === undefined) volumeValue = 1;
  if (wait === undefined) wait = 0;
  if (timeout === undefined) timeout = 2;

  var attack = timeout / 4;
  var decay = timeout;

  var oscillator, volume;
  oscillator = actx.createOscillator();
  volume = actx.createGain();

  oscillator.connect(volume);
  volume.connect(actx.destination);

  oscillator.type = type;

  oscillator.frequency.value = frequency;
  volume.gain.value = volumeValue;

  // mitigate irritating pop
  // if (!["fade-in", "fade-out"].includes(fx)) {
  cutOff(volume);
  // }

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
    default:
      break;
  }

  // volume.gain.setTargetAtTime(
  //   0,
  //   actx.currentTime + wait + timeout,
  //   timeout + wait - 0.015
  // );
  // volume.gain.exponentialRampToValueAtTime(
  //   0.0001,
  //   actx.currentTime + wait + timeout + 1
  // );

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
    var waveTable = [];
    for (var i = 0; i < timeout; i += 0.01) {
      waveTable.push(frequency + Math.sin(i * 40) * (frequency / 40));
    }

    frequencyNode.setValueCurveAtTime(
      waveTable,
      actx.currentTime + wait,
      timeout
    );
  }

  function slide(frequencyNode) {
    if (!nextFreq) {
      return;
    }
    var waveTable = [frequency, nextFreq];

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
}

function floodFill(image, sr, sc, newColor) {
  const current = image[sr][sc];

  if (current === newColor) {
    return image;
  }

  fill(image, sr, sc, newColor, current);

  return image;
}

function fill(image, sr, sc, newColor, current) {
  if (sr < 0) {
    return;
  }

  if (sc < 0) {
    return;
  }

  if (sr > image.length - 1) {
    return;
  }

  if (sc > image[sr].length - 1) {
    return;
  }

  if (image[sr][sc] !== current) {
    return;
  }

  image[sr][sc] = newColor;

  fill(image, sr - 1, sc, newColor, current);
  fill(image, sr + 1, sc, newColor, current);
  fill(image, sr, sc - 1, newColor, current);
  fill(image, sr, sc + 1, newColor, current);
}
